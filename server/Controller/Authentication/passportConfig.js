// const localStratergy = require('passport-local').Strategy;
const User = require('../../Models/User');
const bcrypt = require("bcrypt")
const passport = require('passport')
// const passportJWT = require("passport-jwt");
// const JWTStrategy   = passportJWT.Strategy;
// const ExtractJWT = passportJWT.ExtractJwt;
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const dbm = require('../dbm')

passport.serializeUser(function(user, done) {
	done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
	done(null, user);
  });
  

// *************Removed Custom Login*************

// passport.use(
// 	new localStratergy({
// 		usernameField: 'email',
//         password:"password"
// 	},
// 		function (email, password, done) {
// 			User.findOne({ email: email })
// 			.then(user => {
// 				if(!user){
// 					return done(null,false,"User does not exist")
// 				}
// 				const checkPass = bcrypt.compareSync(password, user.password)
// 				if(!checkPass){
// 					return done(null,false,"Incorrect Password")
// 				}
// 				return done(null, user)
// 			})
// 			.catch(done);
// 		})
// );

// passport.use(new JWTStrategy({
// 	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
// 	secretOrKey   : process.env.SECRET
// },
// function (jwtPayload, done) {

// 	return User.findOneById(jwtPayload.email)
// 		.then(user => {
// 			return done(null, user);
// 		})
// 		.catch(err => {
// 			return done(err);
// 		});
// }
// ));

exports.googleAuthenticate = passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/user/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOne({ googleId: profile.id }, (err, user) => {
		if(err){
			return done(err); 
		}
		else if(user){
			return done(null,user)
		}else{
			let user_data = {
				email:profile.email,
				googleId:profile.id,
				firstName:profile.given_name,
				lastName:profile.family_name
			}
			try{
				dbm.addOauthUser(user_data)
			}
			catch{
				return done(null,user)
			}
		}      
    });
  }
));



exports.verifyUser = passport.authenticate('jwt',{session:false})


