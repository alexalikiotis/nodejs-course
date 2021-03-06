const mongoose = require('mongoose');

// local imports
const logger = require('../util/logger');

// constants
const URI = process.env.MONGO_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

function onOpen() {
  logger.info('Database connected successfully.');
}

function onError(err) {
  logger.error('Database connection failed.', err);
}

db.on('open', onOpen);
db.on('error', onError);
