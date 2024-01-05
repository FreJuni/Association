const express = require("express");
const postRouter = require("./Routers/Rpost");
const adminRouter = require("./Routers/Radmin");
const path = require("path");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const Post = require("./Models/Mpost");
const User = require("./Models/Muser");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");
app.set("views", "Pages");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(postRouter);

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .then((err) => {
      console.log(err);
    });
});

Post.belongsTo(User, { constrainsts: true, onDelete: "CASCADE" }); // when user does't exist  in post post will auto delete User's post
User.hasMany(Post);

app.use("/admin", adminRouter);

sequelize
  .sync()
  .then(() => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "Khame",
        email: "kham@gmail.com",
      });
    }
    return user;
  })
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
