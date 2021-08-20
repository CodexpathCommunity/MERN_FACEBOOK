const router = require("express").Router();
const User = require("../models/User");

//register

router.get("/register", async (req, res) => {
  try {
    const user = await new User({
      username: "req.body.username",
      email: "req.body.email",
      password: "req.body.password",
    });
    await user.save();
    return res.send("user created");
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
