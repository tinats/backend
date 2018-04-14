const mongoose = require('mongoose');

const settings = require('../utils/settingsGenerator')();

mongoose.connect(`mongodb://${settings.DB_URL}/tinats`);