if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = require('./routes/user');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const passport = require('passport');
require('./Controller/Authentication/passportConfig');


app.use(cors({
	origin:["http://localhost:3000",'http://localhost:5000'],
  credentials:true
}))

app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  cookie: { maxAge: 10 * 24 * 60 * 60 * 1000 },//10 days
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', user);

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

