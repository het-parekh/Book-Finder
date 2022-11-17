

const path = require('path');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
  }


const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

const passport = require('passport');
require('./Controller/Authentication/passportConfig');

const user = require('./Routes/user')

app.use(cors({
	origin:[process.env.FRONTEND],
  credentials:true
}))

app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  cookie: { maxAge: 10 * 24 * 60 * 60 * 1000 , secure: true ,sameSite: 'none'},//10 days
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/bookse-backend/user', user);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server started ");
});
module.exports = app;

