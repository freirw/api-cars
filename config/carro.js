const mongoose = require('./mongoose');

const carroSchema = new mongoose.Schema({
    modelo: String,
    ano: Number,
    valor: Number,
    fabricante: String
});


const Carro = mongoose.model('Carro', carroSchema);


const example_cars = [
    { modelo: 'Corolla', ano: 2022, valor: 90000, fabricante: 'Toyota' },
    { modelo: 'Civic', ano: 2021, valor: 85000, fabricante: 'Honda' },
    { modelo: 'Onix', ano: 2023, valor: 75000, fabricante: 'Chevrolet' },
    { modelo: 'HB20', ano: 2022, valor: 70000, fabricante: 'Hyundai' },
    { modelo: 'Golf', ano: 2020, valor: 80000, fabricante: 'Volkswagen' },
    { modelo: 'Focus', ano: 2021, valor: 78000, fabricante: 'Ford' },
    { modelo: 'Cruze', ano: 2023, valor: 85000, fabricante: 'Chevrolet' },
    { modelo: 'Renegade', ano: 2022, valor: 95000, fabricante: 'Jeep' }
];

async function inserirNovosCarros() {
    try {
        await Carro.insertMany(example_cars);
        console.log('Carros adicionados.');
    } catch (err) {
        console.error('Erro ao inserir carros:', err);
    }
}


mongoose.connect('mongodb://localhost:27017/desafio-cars', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexão com o MongoDB feita com sucesso');
        inserirNovosCarros();
    })
    .catch(err => console.error('Erro ao conectar ao MongoDB:', error));

module.exports = Carro; 
