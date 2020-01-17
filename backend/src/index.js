const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-week-6sybr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' }));// without parameters would mean anyone can access.
app.use(express.json()); // 'use' works for all kind of routes + have to be before call them.
app.use(routes);

app.listen(3333);