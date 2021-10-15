const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
  blockType: {
    type: String,
    required: true
  },
  classes: [String]
})