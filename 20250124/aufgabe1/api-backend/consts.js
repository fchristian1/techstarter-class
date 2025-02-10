require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
const NOTEST = process.env.NOTEST;
module.exports = { MONGO_URI, PORT, NOTEST };