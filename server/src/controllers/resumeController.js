const Resume = require("../models/ResumeSchema");
const UserModel = require("../models/UserModel");
const cloudinary = require("../Utility/cloudinary");

exports.createResume= async(req,res)=>{
    let reqBody=req.body;
    let email=req.headers['email'];
    console.log(email)
    try {
      const data = await Resume.aggregate([
            { $match: { email: email, type: req.params.type } ,
        }
            // additional stages of the pipeline
      ])
            if (data.length>0) {
                res.status(200).json({status:"success",data:data})

            } 
          

            
     
           
            
      
       
    } catch (err) {
        console.log(err);
        res.status(400).json({"status":"failed",data:err})

  }
}
exports.getResume=(req,res)=>{
    let query=req.params;
    console.log(req.params)
    try {
        Resume.find({query},(err,data)=>{
            if(err){
                res.status(400).json({"status":"fail",data:err})
            }else{
                res.status(200).json({status:"success",data:data})
            }
        })
    } catch (err) {
        res.status(400).json({"status":"fail",data:err})

  }
}
exports.updateResume=async (req,res)=>{
    let {firstName,
        lastName,
        phone,
        address,
        linkedin,
        summary,
        education,
        experience,
        skills,
        premium }=req.body;
    let {email}=req.headers;
    // reqBody.email=req.headers['email'];
    try {
        Resume.find({ email }, (err, data) => {
            if (data) {
                console.log(data);
            }
            if (err) {
                console.log(data);
            }
        })
       
      const data = await  Resume.aggregate([
            { $match: { email: email, type: req.params.type } ,
        }
      ])
      if(data.length===0){
        res.status(401).json({status:"No resume found!",data:data})

    }else{

        Resume.updateMany({ $set: { firstName,
            lastName,
            phone,
            address,
            linkedin,
            summary,
            education,
            experience,
            skills,
            premium } },(err,data)=>{
                if(err){
                    res.status(400).json({"status":"fail",data:err})
                }else{
                    res.status(200).json({status:"success",data:data})
                }
    
            })

    }

    } catch (err) {
        res.status(400).json({"status":"fail",data:err})

  }
}

exports.resumeBuilderr=async(req, res) => {
   
    try {
        const { firstName,
            lastName,
            phone,
            address,
            linkedin,
            summary,
            education,
            experience,
            skills } = req.body
        let { email } = req.headers;
        await Resume.findOne({ email }, (err, data) => {
            if (data?.length > 0) {
              
                res.json(data)
            } 
     
      
    }) 
    } catch (err) {
        console.log(err)
        res.json(err);

}
   
}

exports.resumeBuilder = async (req, res) => {
    const { firstName,
        lastName,
        phone,
        address,
        linkedin,
        summary,
        education,
        experience,
        skills ,photo} = req.body
    let { email } = req.headers;
    console.log("email", email);
   
    try {
        Resume.findOne({ email:email }, async(err, data) => {
            if (data) {
                if (photo) {
                    const result = await cloudinary.uploader.upload(photo, {
                        upload_preset: "resumeUser",
                    });
                    if (result) {
                        await Resume.updateOne({ email }, {firstName,
                             lastName,
                             phone,
                             address,
                             linkedin,
                             summary,
                             education,
                             experience,
                             skills,photo:result?.url} , (err, data) => {
                             if (data) {
                                 return res.status(200).json({
                                 data:data
                             })}
                         })
                 }
                }
                  
                
            } else {
                Resume.create({firstName,
                    lastName,
                    phone,
                    address,
                    linkedin,
                    summary,
                    education,
                    experience,
                    skills ,email
                }, (err, data) => {
                    console.log(err);

                    if (data) {
                        return res.status(200).json({
                            data:data
                        })
                    }
                    })
               
            }
         })
      
    } catch (err) {
        return res.status(400).json({
            error:err
        })
    }
}