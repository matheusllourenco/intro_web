const { request } = require('express');
const express = require ('express');

const app = express();

const usuarios = [{
    nome: 'matheus',
    idade: '25'
}];

app.get('/usuarios', (request, response) => {
    response.json(usuarios)
});


app.listen(3000);