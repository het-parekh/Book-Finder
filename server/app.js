if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = require('./routes/user');
const cors = require('cors');
const passport = require('passport');
require('./Controller/Authentication/passportConfig');


app.use(cors({
	origin: [process.env.FRONTEND],
  withCredentials:true
}))

app.use(passport.initialize());

app.use('/user', user);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server started ");
});
module.exports = app;

