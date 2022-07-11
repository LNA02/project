const mongoose =require('mongoose');
var slug = require('mongoose-slug-generator')
const  Schema  = mongoose.Schema;
mongoose.plugin(slug);

const tieusu = new Schema({
    name:String,
    date:Date,
    image:String,
    job:String,
    tieusu:String,
});

module.exports = mongoose.model('tieusu', tieusu);

