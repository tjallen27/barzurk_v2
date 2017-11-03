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
    .then((response) => {
      console.log(response);
      User.findById(req.params.id)
      .exec()
      .then((job)=> {
        console.log(job);
        // user.tom(response._id);
        return null;
      });
      res.redirect(`/users/${req.user.id}`);
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

function deleteRoute(req, res) {
  Job
    .findById(req.params.id)
    .exec()
    .then((job) => {
      if(!job) return res.status(404).send('Not found');

      return job.remove();
    })
    .then(() => {
      res.redirect(`/users/${req.user.id}`);
    })
    .catch((err) => {
      res.status(500).end(err);
    });
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
