const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://madmerlin:Lukasr05159040@geonosis.mongodb.umbler.com:46187/attalea', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requireDir('./src/models');

const Product = mongoose.model('Product');
const User = mongoose.model('User');

app.use('/api', require("./src/routes"));


const port = process.env.PORT || 3000;
app.listen(port);