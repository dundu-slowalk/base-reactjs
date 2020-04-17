var express = require("express");
var User = require("../schemas/user");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const users = await User.find({});
  res.json(users);
});

router.post("/", (req, res, next) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
  });

  user.save().then((result) => {
    console.log(result);
    res.status(201).json(result);
  });
});

module.exports = router;
