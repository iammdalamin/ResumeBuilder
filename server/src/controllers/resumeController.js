const Resume = require("../models/ResumeSchema");
const UserModel = require("../models/UserModel");

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
            //     await UserModel.aggregate([
            //         {
            //             $match: { email: email },
                        
            //         },
            //         {
            //             $project: {firstName: 1, lastName:1 },
                        
            //         },
            //         // additional stages of the pipeline
            //     ]).then( (data) => {
            //         const {firstName,lastName} = data[0]
            //         Resume.create({firstName,lastName,email,type:req.params.type}, (err, data) => {
                        
                    
            //             if (err) {
            //                 console.log(err);
            //                 res.status(400).json({"status":"fail",data:err})
            //             }else{
            //                 res.status(200).json({status:"success",data:data})
            //             }
            //         })
            //   })

            
     
           
            
      
       
    } catch (err) {
        console.log(err);
        res.status(400).json({"status":"failed",data:err})

  }
}
exports.getResume=(req,res)=>{
    let query=req.params;
    // reqBody.email=req.headers['email'];
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
        // Resume.find({email},(err,data)=>{
        //     if(err){
        //         res.status(400).json({ "status": "fail", data: err })
                
        //     } else {
        //         Resume.find({ type:req.params.type }, (err, data) => {
        //             if(err){
        //                 res.status(400).json({ "status": "fail", data: err })
                        
        //             } else {
                     
        //                 res.status(200).json({status:"success",data:data})
        
        //             }
        //         })

        //     }
        // })
      const data = await  Resume.aggregate([
            { $match: { email: email, type: req.params.type } ,
        }
            // additional stages of the pipeline
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
