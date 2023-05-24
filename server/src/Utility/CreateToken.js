const jwt=required("jsonwebtoken");

const CreateToken=async (data)=>{
    let payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data};
    return await jwt.sign(payload,"Secretkey123456789");
}

module.exports=CreateToken;