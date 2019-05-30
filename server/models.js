var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Products', {useFindAndModify: false});


var ProductSchema = new mongoose.Schema({
    _id: {type: Number},
    name: {type : String, required: true, minlength: 3},
    quantity: {type: Number, required :true},
    price: {type: Number, required:true}
})
mongoose.model('Product', ProductSchema);

var Product = mongoose.model('Product');

module.exports = Product