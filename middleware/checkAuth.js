function checkAuth(req, res, next) {
  const isAuthenticated = req.oidc?.isAuthenticated();
  req.isAuthenticated = isAuthenticated;
  req.sub = req.oidc?.user?.sub;
  if (!isAuthenticated) {
    // res.redirect('/');
    // res.send({ error: 'must be authenticated' });
    // return;
    console.log('this user must sign in');
    next();
  }
  next();
}

module.exports = checkAuth;
