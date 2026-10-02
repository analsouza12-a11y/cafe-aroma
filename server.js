import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

import cardapio from './Data/cardapio.js';
import produtos from './Data/produtos.js';

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/Imagens', express.static(path.join(__dirname, 'img')));

// Rota do cardápio
app.get('/api/cardapio', (req, res) => {
    res.json(cardapio);
});

// Rota dos produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});