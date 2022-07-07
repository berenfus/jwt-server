const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: false, required: true },
  isActivated: { type: Boolean, required: true, default: false },
  activationLink: { type: String }
});

module.exports = new model('User', UserSchema);
