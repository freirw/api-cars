const express = require("express");
const app = express();
require('dotenv').config();
const db = require("./db");

app.use(express.json());

//atualiza os campos
app.patch("/cars/:id", (request, response)=>{
  const id = parseInt(request.params.id);
  const car = request.body;
  db.UpdateCar(id,car);
  response.sendStatus(200);
})


app.delete('/cars/:id', (request, response) => {
  const id = parseInt(request.params.id)
  response.json(db.deleteCar(id));
  response.sendStatus(204);
  
})

//cria rotas
app.post("/cars", (request, response)=>{
  const car = request.body;
  db.insertCar(car);
  response.sendStatus(201);
})


app.get('/cars', (request, response) => {
  response.json(db.SelectCars());
  
})
app.get('/cars/:id', (request, response) => {
  const id = parseInt(request.params.id)
  response.json(db.SelectCars(id));
  
})

app.listen(process.env.PORT, () => {
    console.log('App is running');

  })