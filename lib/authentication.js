const User = require('../models/user');

function authentication(req, res, next){
  // Check to see if user is logged in
  //if not, exit this piece of middleware
  if(!req.session.isAuthenticated) return next();

// Find the user based on userId in the session
  User
    .findById(req.session.userId)
    .then((user)=>{
      if(!user){
        //If the user cannot be found log out the user
        return req.session.regenerate(()=> res.unauthorized());
      }

      //set the userId back on session
      req.session.userId = user.id;

      //set the whole user object to the request object
      //so we can use the users details in our controllers
      req.user = user;

      //set the whole user object to res.locals so we can use it in the views
      res.locals.user = user;
      //set an isAuthenticated boolean so we can show and hide buttons and links
      res.locals.isAuthenticated = true;

      //we're done, move on to the next piece of middleware
      next();
    })
    .catch(next); //handle any errors with our global catcher
}

module.exports = authentication;
