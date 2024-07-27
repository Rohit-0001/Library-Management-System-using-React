const { connect } = require("mongoose")

const connectDb = async () => {
  return connect('mongodb://127.0.0.1:27017/lms') .then(() => console.log('Connected!'));
}

module.exports = { connectDb }
