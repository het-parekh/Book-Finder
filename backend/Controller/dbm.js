const mongoose = require("mongoose");
const User = require("../Models/User")

mongoose.connect(process.env.URI,{    
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("connected to database"))
.catch((err) => console.log(err))

// function addNewUserToDatabase(user) {
//     User.create(user).then(res => {
//         return ("User added successfully")
//     })
//     .catch((error) => console.log("cannot add user",error))
// }

function addOauthUser(user){
    User.create(user).then(res => {
        return (user)
    })
    .catch((error) => error)
}

function getSavedBooks(user_id){
    return User.findById(user_id).then((user) => {
        return user.savedBooks
    })
}

function addSavedBook(user_id,book_id){
    return User.findById(user_id).then((user) => {
        user.savedBooks.push(book_id)
        user.save()
    })
}

function removeSavedBook(user_id,book_id){
    return User.findById(user_id).then((user) => {
        console.log("TO BE DELETED",book_id,user.savedBooks)
        user.savedBooks = user.savedBooks.filter(book => book !== book_id)
        console.log("DELETED",user.savedBooks)
        user.save()
    })
}


module.exports = {
    // addNewUserToDatabase:addNewUserToDatabase,
    addOauthUser:addOauthUser,
    getSavedBooks:getSavedBooks,
    addSavedBook:addSavedBook,
    removeSavedBook:removeSavedBook,
}


