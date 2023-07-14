const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
},{timestamps:true});

const User=mongoose.model("User",userSchema)

module.exports=User