// This is middleware for restricting routes a user is not allowed to visit if not logged in
const withAuth = (req, res, next) => {
  // If the user is logged in, continue with the request to the restricted route
  if (req.session.logged_in) {
    
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  // return res.redirect("/login");
};

module.exports = withAuth;
