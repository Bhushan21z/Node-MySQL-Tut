const User = require("../models/User");
const db = require("../config/db");

exports.getAllUsers = async (req, res, next) => {
  try {
    const [users, _] = await User.findAll();

    res.status(200).json({ count: users.length, users });
  } catch (error) {
    next(error);
  }
};

exports.createNewUser = async (req, res, next) => {
  try {
    let { name,email, password } = req.body;
    let user = new User(name,email, password);

    user = await user.save();

    res.status(201).json({ message: "User Added" });
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    let UserId = req.params.id;

    let [user, _] = await Post.findById(UserId);

    res.status(200).json({ user: user[0] });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    let sql = "SELECT * FROM users WHERE email = '"+email+ "' AND password = '"+password+"';";
    console.log(sql);
    result = await db.execute(sql);

    res.status(201).json({ user: result[0] });
  } catch (error) {
    next(error);
  }
};


