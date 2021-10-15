import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
// eslint-disable-next-line no-unused-vars
const ENV = process.env.NODE_ENV; //permite jalar las variables del archivo de configuracion y prepara los entornos
const PORT = process.env.PORT || 3000; //definimos un puerto

const app = express();//nuestra aplicacion va a usar express

//Creamos nuestra primera ruta
//app recibe el tipo de request que hacemos al servidor y una funcion anonima
//que recibe un request y un response

const UsersApi = require('./routes/UsersRandom.js');
const PersonaApi = require('./routes/Persona.js');

UsersApi(app);
PersonaApi(app);
// app.get('/', (req, res) => {
//   res.send('Hello world perra');
// });
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`servidor corriendo en ${PORT}`);
}); //La aplicacion escucha el puerto y recibe una funcion anonima
