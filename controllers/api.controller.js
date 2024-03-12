const fs = require("fs");

const getAllEndpoints = async (req, res, next) => {
  try {
    res.status(200).send()
  } catch {
    console.log(err);
  }
};
module.exports = getAllEndpoints;
