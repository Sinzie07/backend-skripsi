const User = require("../models/Users");

exports.createUser = async (req, res, next) => {
  try {
    const user = req.body;

    const result = await User.create(user);

    res.status(201).json({
      status: "success",
      data: result,
    });

    return result;
  } catch (err) {
    return next(err);
  }
};
