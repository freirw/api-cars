const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.json());

const routes = require('./routes/routes');
app.use('/', routes);

const mongoRoutes = require('./routes/MongoRoutes');
app.use('/', mongoRoutes);


app.listen(process.env.PORT, () => {
    console.log('App is running');
});

app.listen(process.env.PORT_MONGODB, () => {
    console.log('App is running MONGODB');
});
