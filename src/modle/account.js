const mongoose =require('mongoose');
const  Schema  = mongoose.Schema;
const account = new Schema({
    email:String,
    password:String,
    name:String,
    numberPhone:String
})
module.exports = mongoose.model('accounts', account);
