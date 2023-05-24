const SendEmailUtility = require("../../Utility/SendMailerUtility");

const UserEmailVerityService=async (Request,DataModel)=>{
    try {
       let email=Request.params.email;
       let OTPCode=Math.floor(1000+Math.random()*900000);
       let UserCount=(await DataModel.aggregate([{$match:{email:email}},{$count:"total"}]));
       if(UserCount.length>0){
        await OTPModel.create({email:email,otp:OTPCode});

        let SendEmail=await SendEmailUtility(email,"Your PIN Code is= "+OTPCode,"Invetory Management PIN Verification !");
        return {status:"success",data:SendEmail};
       }else{
        return {status:"fail",data:"No User Found !"}
       }
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}
module.exports=UserEmailVerityService;