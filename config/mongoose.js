
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/desafio-cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

module.exports = mongoose;
