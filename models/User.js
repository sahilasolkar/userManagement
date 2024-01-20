const { DataTypes } = require("sequelize");
const { Mydb } = require("../config/db");

const User = Mydb.define("User", {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  age: DataTypes.INTEGER,
});

Mydb.sync()
  .then(() => {
    console.log("Users table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

exports.User = User;
