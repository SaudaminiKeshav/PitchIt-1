const mongoose = require("mongoose");


const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  profilepic: { 
    //data: Buffer, 
    //contentType: String
    type: String
    //default: null
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  // profilepic: { 
  //   //data: Buffer, 
  //   //contentType: String
  //   type: String
  //   //default: null
  // }
  });

module.exports = User = mongoose.model("users", UserSchema);