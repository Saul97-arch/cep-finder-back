const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  cep: {
    type: String,
    
  },
  logradouro: {
    type: String,
    required: false,
  },
  bairro: {
    type: String,
  },
  localidade: {
    type: String,
  },
  uf: {
    type: String,
  },
  ibge: {
    type: String,
  },
  gia: {
    type: String,
  },
  ddd: {
    type: String,
  },
  siafi: {
    type: Number,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
