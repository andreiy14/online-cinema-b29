//instantiate express module
const express = require("express");
//Get routes to the variabel
const router = require('./src/routes')
require('dotenv').config(); 
const cors = require('cors')

//use express in app variable
const app = express();


//define the server port
const port = 5000;

app.use(express.json());
app.use(cors())
// Add endpoint grouping and router
app.use('/api/v1/', router)
app.use('/uploads', express.static('uploads'));

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`));