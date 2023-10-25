const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getHabit } = require('./controller')
const { getRate } = require('./controller')
const { getProgress } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/habit", getHabit);

app.get("/api/rate", getRate);

app.get("/api/progress", getProgress);



app.listen(4000, () => console.log("Server running on 4000"));
