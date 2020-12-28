// const express = require('express'); lo cambiamos por el import
// Con babel podemos utilizar los imports y exports de javascript

import express from "express"

const app = express();

app.listen(3000);
console.log('Server running on port', 3000);