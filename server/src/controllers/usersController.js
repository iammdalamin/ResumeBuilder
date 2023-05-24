const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const OTPModel = require("../models/OTPModel");
const SendEmailUtility = require("../Utility/SendMailerUtility");
// const hashPassword = require("../helpers/auth");
const bcrypt = require("bcrypt");
const { comparePassword, hashPassword } = require("../helpers/auth");
const cloudinary = require("../Utility/cloudinary");

// Registration
exports.registration = async(req, res) => {
  try {
    const { firstName, lastName, email, password, photo } = req.body[0];
    console.log(req.body);
    if (!firstName.trim()) {
        return res.json({status:400,
            error:"First name is required"})
    }
    if (!lastName.trim()) {
        return res.json({status:400,
            error:"Last name is required"})
    }
    if (!email) {
        return res.json({
            status:400,

            error:"Email is required"
        })
    }
    if (!password || password.length<6) {
        return res.json({
            status:400,
            error:"Password must be at least 6 characters long"
        })
    }

    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
        return res.json({
            status:400,

            error:"Email is taken"
        })
    }
  //  const hashPassword = (password) => {
  //     console.log(password);
  //     return new Promise((resolve, reject) => {
  //         bcrypt.genSalt(12, (err, salt) => {
  //             if (err) {
  //                 reject(err)
  //             }
  //             bcrypt.hash(password, salt, (err, hash) => {
  //                 if (err) {
  //                     reject(err)
  //                 }
  //                 resolve(hash)
  //             })
  //         })
  //     })
  //  }
   const hashedPassword = await hashPassword(password)

    if (photo) {
    const result = await cloudinary.uploader.upload(photo, {
        upload_preset: "resumeUser",
    });

    if (result) {
        const user = await new UserModel({
            firstName,
            lastName,
          email,
            photo:result.url,
            password:hashedPassword
        }).save()

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn:"7d",
        })

        res.json({
            user: {
                name: `${user.firstName +" "+ user.lastName}`,
                email: user.email,
            },
            token

        })
    }
  }

} catch(err) {
    console.log(err);
}
};

exports.profileUpdate = (req, res) => {
  let reqBody = req.body;
  let email = req.headers["email"];
  console.log("Eamil controller", email);
  UserModel.updateOne({ email: email }, reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.json({
      status: 400,
      error: "Enter an email"
    })
  }
  if (!password || password.length < 6) {
    return res.json({
      status: 400,

      error: "Password must be at least 6 characters long"
    })
  };


  UserModel.findOne({ email }, (err, data) => {
    try {
        if (!err) {
            const match = comparePassword(password, data.password)
            if (!match) {
                res.json({
                    status:400,

                    error:"Password is incorrect"
                })
            } else {
                let Payload = { exp: Math.floor(Date.now() / 1000) * (24 * 60 * 60), data: data["email"] }
                let token = jwt.sign(Payload, process.env.JWT_SECRET)
                res.json({
                    status:200,

                    message: "Login Success",
                    data:data,
                    token
                })
            }
       }
    } catch {
            res.json({
                status:400,

               error:"User not found"
            })
    }
   
  })
  
}
exports.profileDetails = (req, res) => {
  let email = req.headers["email"];
  UserModel.aggregate(
    [
      { $match: { email: email } },
      {
        $project: {
          _id: 1,
          firstName: 1,
          email: 1,
          lastName: 1,
          mobile: 1,
          photo: 1,
          password: 1,
        },
      },
    ],
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "fail", data: err });
      } else {
        res.status(200).json({ status: "success", data: data });
      }
    }
  );
};

exports.recoverVerifyEmail = async (req, res) => {
  let email = req.params.email;
  let OTPCode = Math.floor(100000 + Math.random() * 900000);
  try {
    // Email account Verify
    let UserCount = await UserModel.aggregate([
      { $match: { email: email } },
      { $count: "total" },
    ]);

    if (UserCount.length > 0) {
      // OTP insert
      let CreateOTP = await OTPModel.create({ email: email, otp: OTPCode });

      // Email Send
      let SendEmail = await SendEmailUtility(
        email,
        "Your PIN Code is " + OTPCode,
        "Task Manager PIN Varification !"
      );
      res.status(200).json({ status: "Success", data: SendEmail });
    } else {
      res.status(200).json({ status: "fail", data: "No Users Found !" });
    }
  } catch (error) {
    res.status(200).json({ status: "fail", data: error });
  }
};

exports.recoverVerifyOTP = async (req, res) => {
  let email = req.params.email;
  let OTPCode = req.params.otp;
  let status = 0;
  let updateStatus = 1;
  try {
    let OTPCount = await OTPModel.aggregate([
      { $match: { email: email, otp: OTPCode, status: status } },
      { $count: "total" },
    ]);
    if (OTPCount.length > 0) {
      let OTPUpdate = await OTPModel.updateOne(
        { email: email, otp: OTPCode, status: status },
        { email: email, otp: OTPCode, status: updateStatus }
      );
      res.status(200).json({ status: "success", data: OTPUpdate });
    } else {
      res.status(200).json({ status: "fail", data: "Invalid OTP Code !" });
    }
  } catch (error) {
    res.status(401).json({ status: "fail", data: error });
  }
};

exports.RecoveryResetPassword = async (req, res) => {
  let email = req.body["email"];
  let OTPCode = req.body["OTP"];
  let NewPass = req.body["password"];
  let statusUpdate = 1;
  try {
    let OTPCount = await OTPModel.aggregate([
      { $match: { email: email, otp: OTPCode, status: statusUpdate } },
      { $count: "total" },
    ]);
    if (OTPCount.length > 0) {
      let PasswordUpdate=await UserModel.updateOne({email:email},{
        password:NewPass,
      })
      res.status(200).json({status:"success",data:PasswordUpdate})
    } else {
    }
  } catch (error) {
    res.status(200).json({ status: "fail", data: error });
  }
};
