const User = require('../models/user');
const rp = require('request-promise');

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
    User
   .create(req.body)
   .then(() => res.redirect(`/login`))
   .catch((err) => {
     if(err.name === 'ValidationError') {
       req.flash('alert', 'Passwords do not match');
       return res.redirect('/register');
     }
     next();
   });
  });
}

// UPDATE
function updateRoute(req, res) {
  User
  .findById(req.params.id)
  .exec()
  .then((user) => {
    if (!user) return res.badRequest(404, 'not found');

    for(const field in req.body) {
      user[field] = req.body[field];
    }
    return user.save();
  })
    .then((user) => {
      res.redirect(`/users/${user.id}`);
    })
    .catch((err) => res.badRequest(500, err));
}

module.exports = {
  new: newRoute,
  create: createRoute,
  update: updateRoute
};
