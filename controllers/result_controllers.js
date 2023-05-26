const Result = require("../models/Results");

exports.createResult = async (req, res, next) => {
  try {
    const results = req.body;

    await Result.insertMany(results);

    res.status(201).json({
      status: "success",
      data: results,
    });
  } catch (err) {
    return next(err);
  }
};
