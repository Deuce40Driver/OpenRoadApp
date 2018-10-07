const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:     {
              first:  { type: String, required: true },
              last:   { type: String, required: true }
            },

  email:    { type: String, required: true },

  password: { type: String, required: true },

  address:  {
              street: { type: String },
              city:   { type: String },
              state:  { type: String },
              zip:  { type: String }
            },

  auto:     {
              year:   { type: Number },
              make:   { type: String },
              model:  { type: String }
            },

  insurance:{
              company:{ type: Number },
              policy: { type: String }
            }
});

const User = mongoose.model("User", userSchema);

module.exports = User;