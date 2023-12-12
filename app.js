//importamos el modulo de express//
const express = require("express");
 
//declaramos el puerto donde se levantará el servidor//
const PORT = 3000;
 
//asi inicializamos express y podemos acceder a todas las funcionalidades que nos proporciona//
const app = express();
 
//analizamos los archivos JSON//
app.use(express.json());
 
const users = require("./controllers/userscontroler");
app.use("/users", users);
 
app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});

