const Job = require('../models/job');
const User = require('../models/user');

function indexRoute(req, res) {
  Job
    .find()
    .exec()
    .then((jobs) => {
      res.render('jobs/index', { jobs });
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

function newRoute(req, res){
  res.render('jobs/new');
}

function showRoute(req, res) {
  Job
    .findById(req.params.id)
    .populate('createdBy jobs.createdBy')
    .exec()
    .then((job) => {
      if(!job) return res.status(404).send('Not found');
      res.render('jobs/show', { job });

    })
    .catch((err) => {
      res.status(500).end(err);
    });

}

function createRoute(req, res) {
  req.body.createdBy = req.user;
  Job
    .create(req.body)
    .then((thisJob) => {
      User
        .findById(thisJob.createdBy._id)
        .exec()
        .then((thisUser)=>{
          if (!Array.isArray(thisUser.jobs)) {
            thisUser.jobs = [];
          }
          thisUser.jobs.push(thisJob.id);
          thisUser.save();
          // console.log('this user',thisUser);
        })
        .then(()=> {
          res.redirect(`/users/${req.user.id}`);
        });
      console.log(req.body);
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

function editRoute(req, res) {
  Job
    .findById(req.params.id)
    .exec()
    .then((job) => {
      if(!job) return res.status(404).send('Not found');
      res.render('jobs/edit', { job });
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

function updateRoute(req, res) {
  Job
    .findById(req.params.id)
    .exec()
    .then((job) => {
      if(!job) return res.status(404).send('Not found');

      for(const field in req.body) {
        job[field] = req.body[field];
      }

      return job.save();
    })
    .then(() => {
      res.redirect(`/users/${req.user.id}`);
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

function deleteRoute(req, res, next) {
  Job
    .findById(req.params.id)
    .then((job) => {
      if(!job) return res.notFound();
      return job.remove();
    })
    .then((job) => {
      console.log(job);
      User
      .findById(req.user.id)
      .then((thisUser)=>{
        const index = thisUser.jobs[thisUser.jobs.length-1];
        console.log('job deleted:' + index);
        if (index === thisUser.jobs[thisUser.jobs.length-1]) {
          thisUser.jobs.splice(index, 1);
          return thisUser.save();
        }
      });
    })
    .then(() => {
      res.redirect(`/users/${req.user.id}`);
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  show: showRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
