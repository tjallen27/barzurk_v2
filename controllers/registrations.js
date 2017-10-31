const User = require('../models/user');
const rp = require('request-promise');

function indexRoute(req, res, next) {
  User
    .find()
    .then((users) => res.render('registrations/index', { users }))
    .catch(next);
}

function newRoute(req, res) {
  return res.render('registrations/new');
}

function createRoute(req, res, next) {
  return rp({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    qs: {
      address: req.body.address.postcode,
      key: process.env.GEOCODING_KEY
    },
    json: true
  }).then((response) => {
    req.body.address.lat = response.results[0].geometry.location.lat;
    req.body.address.lng = response.results[0].geometry.location.lng;
    console.log(response);
    User
    .create(req.body)
    .then(() => res.redirect('/login'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        req.flash('alert', 'Passwords do not match');
        return res.redirect('/register');
      }
      next();
    });
  });
}

function editRoute(req, res){
  return res.render('registrations/edit');
}

function updateRoute(req, res, next) {
  User
    .findById(req.user.id)
    .then((user) => {
      if(!user) return res.notFound();
      for(const field in req.body) {
        user[field] = req.body[field];
      }
      return user.save();
    })
    .then(() => res.redirect(`/account`))
    .catch(next);
}

function deleteRoute(req, res, next) {
  req.user
    .remove()
    .then(() => {
      req.session.regenerate(() => res.unauthorized('/', 'Your account has been deleted'));
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
