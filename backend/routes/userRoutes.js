const express =require('express');
const router=express.Router();
const {registerUser,authUser,allUsers}=require('../Controllers/userController');
const {protect}=require('../middleware/authMiddleware');
router.route('/').post(registerUser);
router.route('/').get(protect,allUsers);  
router.post('/login',authUser);
module.exports=router;
