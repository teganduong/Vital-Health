const passport = require('passport');
const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
const usersCtrl = require('../controllers/usersCtrl.js');
<<<<<<< 238ca0c661d7827e2884ad758aaadd13e59bcf81
const config = require('../config/api-keys.js');
const db = require('../db/connection.js');
=======
const config = require('../config.js');
>>>>>>> complete fitbit and moves integration

const addFitbitUser = (userData, done, accessToken, profile) => {
  console.log('inside addFitbitUser >>>>');
  db.none('insert into users(name, username, password, email, weight, bmi, goal)' +
  'values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal})',
     userData)
  .then(() => {
    return done(null, {
      accessToken: accessToken,
      profile: profile
    });
  })
  .catch((error) => {
    console.log(error);
    return done(error, null);
  });
};

const checkIfUserInDb = (userData, done, accessToken, profile) => {
  console.log('inside checkIfUserInDb >>>');
  console.log('userData in checkIfUserInDb: ', userData);
  db.one('select * from users where username=${username}', userData)
    .then(() => (
      done(null, {
        accessToken: accessToken,
        profile: profile
      })
    ))
    .catch((error) => {
      console.log(error);
      addFitbitUser(userData, done, accessToken, profile);
    });
};

passport.use(new FitbitStrategy({
  clientID: config.Fitbit.clientID,
  clientSecret: config.Fitbit.clientSecret,
  scope: ['activity', 'heartrate', 'location', 'profile', 'sleep'],
  callbackURL: config.Fitbit.callbackURL
}, 
  (accessToken, refreshToken, profile, done) => {
    console.log('inside FitbitStrategy >>>');
    const userData = {
      name: profile._json.user.fullName,
<<<<<<< 238ca0c661d7827e2884ad758aaadd13e59bcf81
      username: profile._json.user.displayName,
      password: profile._json.user.displayName,
      email: profile._json.user.gender,
      weight: profile._json.user.weight,
      height: profile._json.user.height,
      bmi: 21.3,
      goal: accessToken
    };
    process.nextTick(() => {
      checkIfUserInDb(userData, done, accessToken, profile);
    });
  })
);

passport.serializeUser((user, done) => {
  const userObj = {
    accessToken: user.accessToken,
    provider: user.profile.provider,
    id: user.profile.id,
    username: user.profile.displayName
  };
  console.log('insider serializeUser', userObj);
  done(null, userObj);
});
=======
      username: profile._json.user.fullName,
      password: profile._json.user.encodedId,
      email: profile._json.user.gender,
      weight: profile._json.user.weight,
      bmi: 21.3,
      goal: 'refactored',
      points: 0
    };
    process.nextTick(() => {
      usersCtrl.addUser({ body: userData });
     });
   })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
>>>>>>> complete fitbit and moves integration

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
