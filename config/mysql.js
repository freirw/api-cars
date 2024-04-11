const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'',
    database:'desafio'
})

connection.connect((err) => {
    if (err){
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
})

connection.query('SELECT * FROM cars_example', (err, resultados) => {
    if (err) {
        console.error('Erro ao executar a consulta:', err);
        return;
    }
    console.log('Resultado da consulta:', resultados);
});


connection.end();