const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  rate: {
    type: Number
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

jobSchema.methods.ownedBy = function ownedBy(user){
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('Job', jobSchema);
