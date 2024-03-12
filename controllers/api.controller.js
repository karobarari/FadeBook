const fs = require("fs");
const { fetchEndpoints } = require("../models/api.model");

const getAllEndpoints = async (req, res, next) => {
  try {
    const endpointData = await new Promise((resolve, reject) => {
      fetchEndpoints((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    res.status(200).send(endpointData)

  } catch (error) {
    console.error("Error fetching API descriptions:", error);
    throw new Error("Internal Server Error");
  }
};

module.exports = getAllEndpoints;
