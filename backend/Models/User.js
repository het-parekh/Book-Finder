const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // username:{type:"String" , default: null, required: true },
    email:{type: String, default: null ,index: { unique: true } , required:true},
    // password:{ type: String, default: null },
    googleId:{type: String, default: null },
    firstName:{type: String, default: null },
    lastName:{type: String, default: null },
    savedBooks:[{type: String, default: null , unique:true }]
})

module.exports = mongoose.model("User",UserSchema);

