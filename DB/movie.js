const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({

  titel: {
    type: String,
    required: true,
    trim: true,
  },
  regisseur: {
    type: String,
    required: true,
    trim: true,
  },
  hoofdrollen : {
    type: [String],
    required: true,
  },
  land: {
    type: String,
    required: false,
  },
  release_datum: {
    type: String,
    required: true,
  },
  duur: {
    type: String,
    required: true,
  },
  img_url: {
    type: String,
    required: true,
  },
  trailer_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  vertoningen: {
    type: [Object],
    required: false,
  },
  isReleased:{
    type: Boolean,
    required: true,
  }
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;