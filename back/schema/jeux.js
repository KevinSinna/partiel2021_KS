const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jeuSchema = new Schema({
    id:String,
    name: String,
    description:String,
    type:String,
    console:String,
    disponible:String
  });

const jeux = mongoose.model('jeux', jeuSchema,'jeux')

module.exports = jeux