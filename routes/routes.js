const express = require("express");
const router = express.Router();


router.get('/cars', (request, response) => {
    connection.query('SELECT * FROM cars_example', (error, results) => {
        if (error) {
            console.error('Erro ao selecionar carros:', error);
            response.sendStatus(500);
        } else {
            response.json(results);
        }
    });
});

router.get('/cars/:id', (request, response) => {
    const id = parseInt(request.params.id);
    connection.query('SELECT * FROM cars_example WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Erro ao selecionar carro:', error);
            response.sendStatus(500);
        } else {
            if (results.length > 0) {
                response.json(results[0]);
            } else {
                response.sendStatus(404);
            }
        }
    });
});

router.post("/cars", (request, response) => {
    const car = request.body;
    connection.query('INSERT INTO cars_example SET ?', car, (error, results) => {
        if (error) {
            console.error('Erro ao inserir carro:', error);
            response.sendStatus(500);
        } else {
            response.sendStatus(201);
        }
    });
});

router.put("/cars/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const car = request.body;
    connection.query('UPDATE cars_example SET ? WHERE id = ?', [car, id], (error, results) => {
        if (error) {
            console.error('Erro ao atualizar carro:', error);
            response.sendStatus(500);
        } else {
            response.sendStatus(200);
        }
    });
});

router.delete('/cars/:id', (request, response) => {
    const id = parseInt(request.params.id);
    connection.query('DELETE FROM cars_example WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Erro ao excluir carro:', error);
            response.sendStatus(500);
        } else {
            response.sendStatus(204);
        }
    });
});

module.exports = router;
