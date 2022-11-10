const router = require('express').Router();

// const dbm = require('../Controller/dbm');
// const User = require('../Models/User');
// const bcrypt = require('bcrypt')
const passport = require('passport')
// const jwt = require('jsonwebtoken');

router.get('/' , async (req, res) => {
  return res.status(200).send("User get req")
})

// if(req.user){
//   const payload = {
//     email:req.user.email,
//     _id: req.user._id
//   }
//   let token = jwt.sign(payload,process.env.SECRET,{expiresIn:"20D"})
//   return res.status(200).send({msg:"User has been logged in successfully",token:"Bearer " + token})
// }

router.get('/auth/failed',(req,res) => {
  console.log('failed pass')
  res.redirect(req.session.returnTo)
})

// router.get('/auth/login',(req,res) => {
//   console.log(req.session)
//   console.log('first pass',req.originalUrl)
//   req.session.returnTo = req.originalUrl
//   res.status(200).send({status:"success"})
//   window.open(process.env.HOST + '/user/auth/google','_self')
// })

const saveUrl = (req,res,next) => {
  console.log(req)
  console.log('first pass',req.originalUrl)
  req.session.returnTo = req.originalUrl
  next()
}

router.get('/auth/google',saveUrl,passport.authenticate('google',{ scope: [ 'email', 'profile' ] }))

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:"/auth/failed"}),(req,res) => {
  res.redirect(process.env.FRONTEND)
}) 

router.get('/auth/success',(req,res) => {
  if(req.user){
    res.status(200).send({msg:"Logged In Successfully"})
  }else{
    res.status(401).send({msg:"Authorization Failed"})
  }
  
})
// Removed Custom Login

// router.post('/login', async (req,res,next) => {
//   let email = req.body.email
//   let password = req.body.password
//   if(!email || !password){
//     return res.status(406).send("All information not provided")
//   }
//   passport.authenticate('local',(err,user,info) => {
//     if(err){
//       return res.status(401).send(err)
//     }
//     if(!user){
//       return res.status(401).send(info)
//     }
//     const payload = {
//       email:user.email,
//       pass:user.password
//     }
//     const token = jwt.sign(payload,process.env.SECRET,{expiresIn:"20D"})
//     res.status(200).send({msg:"User has been logged in successfully",token:"Bearer " + token})
//   })(req,res,next)
// })

// router.post('/signup', async (req, res) => {
//     console.log(req.body)
//     if (typeof req.body.email === "undefined" || typeof req.body.password === "undefined") {
//       return  res.status(406).send("All information not provided");
//     }
//     const email = req.body.email;
//     const pass = bcrypt.hashSync(req.body.password,10);
//     try {
//       users = await dbm.addNewUserToDatabase({email:email,password:pass});
//       res.status(200).send("User inserted successfully");
//     } catch (error) {
//       if (typeof error.keyValue !== 'undefined') {
//         return  res.status(500).send(`${error.keyValue.email} already exists`);
//       }
//       res.status(500).send();
//     }
//   });

  module.exports = router;
