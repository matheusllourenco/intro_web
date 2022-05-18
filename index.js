const express = require ('express');

const app = express();

const usuarios = [{
    nome: 'matheus',
    idade: '25'
}];

app.get('/usuarios', (request, response) => {
    response.json(usuarios)
});

app.post('/usuarios', (request, response) => {
    const novoUssuario = {
        nome: 'joão Pedro',
        idade: 22
    };

    usuarios.push(novoUssuario);

    response.json(novoUssuario);
});

app.put('/usuarios/:idUsuarios', (request, response) => {
    const idUsuarios = request.params.idUsuarios
    response.json(usuarios)
});


app.listen(3000, () => {
    console.log('minha aplicação on');
});