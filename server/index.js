const express = require("express");
require('dotenv').config();
const cors = require("cors");

const app = express();
let PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());


app.listen(PORT, ()=>{
console.log(`Server is listening on port ${PORT}`)
});