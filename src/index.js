// const express = require('express'); lo cambiamos por el import
// Con babel podemos utilizar los imports y exports de javascript

import express from "express"

// Ahora utilizaremos el comando npx (que sirve para buscar unm comando en especifico en node_modules)
// npx babel-node src/index.js
// Pero para no escribir un comando tan largo creamos el siguiente script en el package.json
// "start": "nodemon src/index.js --exec babel-node"

const app = express();

app.listen(3000);
console.log('Server running on port', 3000);