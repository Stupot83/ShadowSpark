const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Dev = mongoose.model("devs");
const connect = require("../config/connect");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = connect.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Dev.findById(jwt_payload.id)
        .then(dev => {
          if (dev) {
            return done(null, dev);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
