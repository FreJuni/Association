const Sequelize = require("sequelize");

const db = require("../util/database");

const Post = db.define("sequel", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
