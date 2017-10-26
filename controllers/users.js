const User = require('../models/user');
const Job = require('../models/job');

function indexRoute(req, res, next) {
  User
    .find()
    .exec()
    .then((users) => res.render('users/index', { users }))
    .catch(next);
}

function showRoute(req, res, next){
  User
  .findById(req.params.id)
  .exec()
  .then((user)=>{
    Job
    .find({ createdBy: user.id })
    .exec()
    .then((jobs)=>{
      return res.render('users/show', { user, jobs });
    });
  })
  .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute
};
