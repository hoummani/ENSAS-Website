const User = require('../models/User');

module.exports.controller = (app) => {
  // register a user
app.post('/users/register', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const newUser=new User({
    firstName,
    lastName,
    email,
    password
  });
  User.createUser(newUser, (error, user) => {
    if (error) { console.log(error); }
    res.send({ user });
  });
});
}