const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-week-6sybr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); // 'use' works for all kind of routes

// HTTP Methods: get, post, put, delete

// Parameter's types:
    // query params: reqest.query
            // (Filtros, ORdenação, Paginação...)
    // route params: request.params
            // (Identificar um recurso na alteração ou remoção)
    // body: request.body
            // (Dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Paulo OmniStack'});
});

app.listen(3333);