const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
let PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
});
