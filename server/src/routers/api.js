const express = require("express");
const router = express.Router();
const userController=require("../controllers/usersController");

const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const { createResume, getResume, updateResume, resumeBuilder } = require("../controllers/resumeController");

// User Actions Routes 
router.post("/registration",userController.registration);
router.post("/login",userController.login)
router.post("/profileUpdate",AuthVerifyMiddleware,userController.profileUpdate)
router.get("/profileDetails",AuthVerifyMiddleware,userController.profileDetails)
router.get("/recoverVerifyEmail/:email",userController.recoverVerifyEmail)
router.get("/recoverVerifyOTP/:email/:otp",userController.recoverVerifyOTP)

router.post("/recoveryResetPassword",userController.RecoveryResetPassword)




router.put("/resume/builder", AuthVerifyMiddleware,resumeBuilder)

router.get("/resume/create/:type", AuthVerifyMiddleware, createResume)
router.get("/resume/:type", AuthVerifyMiddleware,getResume)
router.put("/resume/update/:type",AuthVerifyMiddleware, updateResume)




module.exports = router;
