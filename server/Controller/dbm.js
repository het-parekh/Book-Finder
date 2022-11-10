const mongoose = require("mongoose");
const User = require("../Models/User")
// const SavedBooks = required("../Models/SavedBooks")

mongoose.connect(process.env.URI,{    
    useNewUrlParser: true,
    useUnifiedTopology: true
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

// function saveBooks(books,user){
//     books.forEach((book) => {
//         SavedBooks.insertOne({
//             user:user,
//             google_book_id:book.id
//         })
//         .then((res) => {
//             return ("Books saved successfully")
//         })
//         .catch((error) => Promise.reject("cannot add books"))
//     })
// }

module.exports = {
    // addNewUserToDatabase:addNewUserToDatabase,
    addOauthUser:addOauthUser
    // saveBooks:saveBooks
}


