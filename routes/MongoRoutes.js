const express = require("express");
const router = express.Router();
const mongoose = require("../config/mongoose");
const Carro = require('../config/carro');

router.get('/carros', async (req, res) => {
    try {
        const carros = await Carro.find();
        res.json(carros);
    } catch (error) {
        console.error('Erro ao obter carros:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.get('/carros/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const carro = await Carro.findById(id);
        if (!carro) return res.status(404).json({ error: 'Carro não encontrado' });
        res.json(carro);
    } catch (error) {
        console.error('Erro ao obter carro por ID:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.post('/carros', async (req, res) => {
    try {
        const novoCarro = req.body;
        const carro = await Carro.create(novoCarro);
        res.status(201).json(carro);
    } catch (error) {
        console.error('Erro ao adicionar carro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.put('/carros/:id', async (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
        const carro = await Carro.findByIdAndUpdate(id, dadosAtualizados, { new: true });
        res.json(carro);
    } catch (error) {
        console.error('Erro ao atualizar carro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.delete('/carros/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Carro.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (error) {
        console.error('Erro ao excluir carro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

module.exports = router;
