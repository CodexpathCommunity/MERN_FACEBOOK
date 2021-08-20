const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World! authentication");
});

module.exports = router;
