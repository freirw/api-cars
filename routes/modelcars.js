const mongoose = require('mongoose');

const carroSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    fabricante: {
        type: String,
        required: true
    }
});

const Carro = mongoose.model('Carro', carroSchema);

module.exports = Carro;
