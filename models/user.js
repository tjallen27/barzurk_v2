const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  pubName: {type: String, required: true},
  address: {
    streetNumber: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postcode: { type: String, required: true },
    country: { type: String },
    lat: { type: Number },
    lng: { type: Number }
  },
  email: {type: String, required: true},
  phone: {type: String, required: true},
  password: {type: String, required: true},
  jobs: [{ type: mongoose.Schema.ObjectId, ref: 'Job' }]
});

userSchema
  // virtual, use it but don't store it in the database
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

//lifestyle hook - mongoose middleware
userSchema.pre('validate', function checkPassword(next) {
  if(!this.password && !this.githubId) {
    this.invalidate('password', 'required');
  }
  if(this.isModified('password') && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});

// check password has not changed
userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.tom = function tom(password) {
  return console.log('Tom', password);
};

//'User' specifies the collection where each user is stored.
module.exports = mongoose.model('User', userSchema);
