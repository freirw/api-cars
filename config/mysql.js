const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "desafio",
});
  
connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
        return;
    }
    console.log("Conectado ao MySQL");

    connection.query("SHOW TABLES LIKE 'veiculos'", (error, results, fields) => {
        if (error) {
            console.error("Erro ao verificar se a tabela veiculos existe", error);
            return;
        }


        if (results.length === 0) {
            console.log("A tabela de veiculos não existe.");

            connection.query(`CREATE TABLE veiculos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                modelo VARCHAR(255) NOT NULL,
                ano INT NOT NULL,
                valor FLOAT NOT NULL,
                fabricante VARCHAR(255) NOT NULL
            )`, (error, results, fields) => {
                if (error) {
                    console.error("Erro ao criar tabela de veiculos:", error);
                    return;
                }
                console.log("Tabela de veiculos criada com sucesso");

            
                const exemplosveiculos = [
                    { modelo: "Gol", ano: 2015, valor: 35000, fabricante: "Volkswagen" },
                    { modelo: "Civic", ano: 2018, valor: 55000, fabricante: "Honda" },
                    { modelo: "Corolla", ano: 2019, valor: 60000, fabricante: "Toyota" },
                    { modelo: "Onix", ano: 2017, valor: 40000, fabricante: "Chevrolet" },
                    { modelo: "HB20", ano: 2016, valor: 38000, fabricante: "Hyundai" },
                    { modelo: "Ka", ano: 2015, valor: 32000, fabricante: "Ford" },
                    { modelo: "Fit", ano: 2017, valor: 45000, fabricante: "Honda" },
                    { modelo: "Uno", ano: 2014, valor: 25000, fabricante: "Fiat" }
                ];

                connection.query("INSERT INTO veiculos (modelo, ano, valor, fabricante) VALUES ?", [exemplosveiculos.map(veiculos => [veiculos.modelo, veiculos.ano, veiculos.valor, veiculos.fabricante])], (error, results) => {
                    if (error) {
                        console.error("Erro ao adicionar veiculos:", error);
                        return;
                    }
                    console.log("Veiculos adicionado com sucesso");
                });
            });
        } else {
            console.log("Ja existe uma tabela com este nome");
        }
    });
});

module.exports = connection;
