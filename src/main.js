const express = require("express");
const cors = require(cors);

const app = express();

const PORT = 8008;

app.use(cors());
app.use(express.json());

app.get()

app.listen(PORT, () => {
    console.log(`Listening from port ${PORT}...`);
})