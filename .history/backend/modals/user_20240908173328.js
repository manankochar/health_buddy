const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required:true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  age: {
    type: Number,
    required:true,
    max
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

UserSchema.set('toJSON', {
  virtuals: true,
})
exports.User = mongoose.model("User", UserSchema);
exports.UserSchema = UserSchema;
