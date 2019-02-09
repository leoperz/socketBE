"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'todo esta bien!!'
    });
});
exports.router.post('/mensajes/:id', (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const id = req.params.id;
    res.json({
        nombre,
        apellido,
        id
    });
});
