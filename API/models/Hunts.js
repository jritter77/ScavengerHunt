let mongoose = require("mongoose");

  
const HuntSchema = mongoose.Schema({
    author: String,
    authorId: String,
    title: String,
    description: String,

    clueList: Object,

    ratings: Array,
    downloads: Number,
});
  
const Hunt = module.exports = mongoose.model('Hunt', HuntSchema);
    

  