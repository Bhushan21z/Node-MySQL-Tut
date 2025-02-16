const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();

// @route GET && POST - /posts/
router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createNewUser);

router.route("/:id").get(userControllers.getUserById);
router.route("/login").post(userControllers.loginUser);

module.exports = router;
