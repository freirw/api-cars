const express = require("express");
const app = express();
require('dotenv').config();


app.use(express.json());
const routes = require('./routes/routes');
app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log('App is running');
});
