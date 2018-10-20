const passport = require("passport");
const Strategy = require("passport-jwt").Strategy;

module.exports = app => {
    var Users = app.db.models.Users;
    var jwt = app.libs.config.jwt;
  
    var strategy = new Strategy({secretOrKey: cfg.jwtSecret}},
      (payload, done) => {
        Users.findById(payload.id)
          .then((user) => {
            if (user) {
              return done(null, {
                id: user.id,
                email: user.email
              });  
            }
            return done(null, false);
          })
          .catch((error) => { return done(error, null);
       });
    passport.use(strategy);
    return {
      initialize: () => {
        return passport.initialize();
      },
      authenticate: () => {
        return passport.authenticate("jwt", config.jwtSession});
      }
    };
  };