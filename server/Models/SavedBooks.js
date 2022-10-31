const mongoose = require('mongoose');

const SavedBooksSchema = new mongoose({
    google_book_id:{type:"String" , required:true , index:{unique:true}},
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
})