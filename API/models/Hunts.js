let mongoose = require("mongoose");

  
const HuntSchema = mongoose.Schema({
    author: String,
    title: String,
    description: String,

    clueList: Array,

    ratings: Array,
    downloads: Number,
});
  
const Hunt = module.exports = mongoose.model('Hunt', HuntSchema);
    

  