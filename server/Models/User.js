const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // username:{type:"String" , default: null, required: true },
    email:{type: String, default: null ,index: { unique: true } , required:true},
    password:{ type: String, default: null },
})

module.exports = mongoose.model("User",UserSchema);

