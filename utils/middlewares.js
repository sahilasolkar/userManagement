const userModelValidator = (req, res, next) => {
  const { firstName, lastName, age } = req.body;
  if (!firstName) {
    res.status(400).send("first name required");
    return;
  }
  if (!lastName) {
    res.status(400).send("last name required");
    return;
  }
  if (!age) {
    res.status(400).send("age required");
    return;
  }
  next();
};

exports.userModelValidator = userModelValidator;
