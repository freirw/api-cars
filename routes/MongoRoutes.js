const express = require("express");
const router = express.Router();
const mongoose = require("../config/mongoose");
const Carro = require('../config/carro');
const ObjectId = mongoose.Types.ObjectId;


router.get('/carros', async (req, res) => {
    try {
        const carros = await Carro.find();
        res.json(carros);
    } catch (err) {
        console.error('Erro ao obter carros:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.get('/carros/:id', async (req, res) => {
    const { id } = req.params;

    // Verificar se o ID fornecido é um ObjectId válido
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID do carro inválido' });
    }

    try {
        const carro = await Carro.findById(id);
        if (!carro) {
            return res.status(404).json({ error: 'Carro não encontrado' });
        }
        res.json(carro);
    } catch (err) {
        console.error('Erro ao obter carro por ID:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Adicionar um novo carro
router.post('/carros', async (req, res) => {
    try {
        const novoCarro = req.body;
        const carro = await Carro.create(novoCarro);
        res.status(201).json(carro);
    } catch (err) {
        console.error('Erro ao adicionar carro:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Atualizar um carro existente
router.put('/carros/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dadosAtualizados = req.body;
        const carro = await Carro.findByIdAndUpdate(id, dadosAtualizados, { new: true });
        res.json(carro);
    } catch (err) {
        console.error('Erro ao atualizar carro:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.delete('/carros/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Carro.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (err) {
        console.error('Erro ao excluir carro:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

module.exports = router;
