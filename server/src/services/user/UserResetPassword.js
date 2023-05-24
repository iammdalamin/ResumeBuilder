

const UserResetPassService=async(Request,DataModel)=>{
    let email=Request.body['email'];
    let OTPCode=Request.body['OTP'];
    let NewPass=Request.body['password'];
    let  statusUpdate=1;
    try {
        let OTPUsedCount=await OTPModel.aggregate([{$match:{email:email,otp:OTPCode,status:statusUpdate}},{$count:"total"}]);
        if(OTPUsedCount.length>0){
            let PasswordUpdate=await DataModel.UpdateOne({email:email},{password:NewPass});
            return {status:"success",data:PasswordUpdate}
        }else{
            return {status:"fail",data:"Invalid Request"};
        }
        
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}

module.exports=UserResetPassService;