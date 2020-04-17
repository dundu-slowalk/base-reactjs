var express = require("express");
var Post = require("../schemas/post");

const router = express.Router();

router.get("/posts", async (req, res, next) => {
  const users = await Post.find({});
  res.json(users);
});

router.post("/posts", (req, res, next) => {
  const user = new Post({
    no: req.body.no,
    title: req.body.title,
    content: req.body.content,
    writer: req.body.writer,
    writeDate: req.body.writeDate,
  });

  user.save().then((result) => {
    console.log(result);
    res.status(201).json(result);
  });
});

module.exports = router;
