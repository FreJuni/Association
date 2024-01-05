const Post = require("../Models/Mpost");

exports.getPosts = (req, res) => {
  Post.findAll()
    .then((post) => {
      res.render("home", { title: "Home Pages", postArr: post });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.renderPostForm = (req, res) => {
  res.render("postForm", { title: "Post Form" });
};

exports.postDetail = (req, res) => {
  const id = req.params.id;
  Post.findByPk(id)
    .then((result) => {
      res.render("postDetail", { title: "Post Detail", post: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePost = (req, res) => {
  const id = req.params.id;
  Post.findByPk(id)
    .then((post) => {
      post.destroy();
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createPost = (req, res) => {
  const { title, description, image } = req.body;
  Post.create({
    title,
    description,
    image,
    userId: req.user.id,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOldPost = (req, res) => {
  const id = req.params.id;
  Post.findByPk(id)
    .then((result) => {
      res.render("editPost", { title: "Edit Post", post: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updatedPost = (req, res) => {
  const { title, description, image, id } = req.body;
  Post.findByPk(id)
    .then((post) => {
      post.title = title;
      post.description = description;
      post.image = image;
      return post.save();
    })
    .then((result) => {
      console.log("Updated sucessfully");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
