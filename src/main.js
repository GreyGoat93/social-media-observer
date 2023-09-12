require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connection = require("./config/database");
const Routes = require('./config/routes');
const Cron = require('./config/cron');

const app = express();

connection.connect();

const PORT = 8008;

app.use(cors());
app.use(express.json());

new Routes(app);

app.listen(PORT, () => {
    console.log(`Listening from port ${PORT}...`);
})

new Cron();