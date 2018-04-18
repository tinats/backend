const mongoose = require('mongoose');

//const settings = require('../utils/settingsGenerator')();

//mongoose.connect(`mongodb://${settings.DB_URL}/tinats`);


const Billet = mongoose.model('Cat', { name: String });

module.exports=Billet