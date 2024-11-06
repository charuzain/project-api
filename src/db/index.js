const DB_NAME = require('../constants.js'); 
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/${DB_NAME}`
    );
  } catch (error) {
    console.log(error)
  }
};

module.exports = dbConnection;

