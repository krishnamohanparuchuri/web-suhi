const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const path = require('path')
const uuid = require('uuid')

// middlewares 

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/public")))
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/public", "index.html"))
);

app.listen(PORT, "0.0.0.0", () =>
    console.log(`Server up and running on port: ${PORT}`)
);