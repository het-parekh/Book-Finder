const router = require('express').Router();

const dbm = require('../Controller/dbm');
// const User = require('../Models/User');
// const bcrypt = require('bcrypt')
const passport = require('passport')
// const jwt = require('jsonwebtoken');

router.get('/' , async (req, res) => {
  return res.status(200).send("User get req")
})

router.get('/auth/failed',(req,res) => {
  res.redirect()
})

router.get('/auth/google',passport.authenticate('google',{ scope: [ 'email', 'profile' ] }))

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:"/auth/failed"}),(req,res) => {
  res.redirect(process.env.FRONTEND)
}) 

router.get('/auth/success',(req,res) => {
  if(req.user){
    res.status(200).send({msg:"Logged In Successfully",firstName:req.user.firstName,lastName:req.user.lastName,user_id:req.user._id})
  }else{
    res.status(401).send({msg:"Authorization Failed"})
  }
  
})

router.get('/logout',(req,res) => {
  req.session = null
  res.clearCookie('session')
  res.clearCookie('session.sig')
  res.redirect(process.env.FRONTEND)

})

router.get('/savedbooks/',(req,res) => {
  if(req.user){
    let user_id = req.user._id
    dbm.getSavedBooks(user_id).then((books) => {
      res.status(200).send({msg:"Saved Books Successfully Retrieved",books:books})
    })
  }else{
    return res.status(401).send({msg:"Authentication not done"})
  }
})  

router.put('/savedbooks/:book_id',(req,res) => {
  console.log("IN SAVED VOOSK API" ,req.params.book_id , req  )
  if(req.user){
    let book_id = req.params.book_id
    let user_id = req.user._id
    console.log(user_id,book_id,"ADDD")
    dbm.addSavedBook(user_id,book_id).then(() => {
      res.status(200).send({msg:"Book Successfully Added"})
    })
  }else{
    return res.status(401).send({msg:"Authentication not done"})
  }
})

router.delete('/savedBooks/:book_id',(req,res) => {
  if(req.user){
    let book_id = req.params.book_id
    let user_id = req.user._id
    console.log(user_id,book_id,"REMOVEE")
    dbm.removeSavedBook(user_id,book_id).then(() => {
      res.status(200).send({msg:"Book Successfully Removed"})
    })
  }else{
    res.status(401).send({msg:"Authentication not done"})
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
