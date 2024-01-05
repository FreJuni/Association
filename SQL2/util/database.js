const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize", "root", "{tJ%zB4Wm@", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
