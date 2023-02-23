const express = require("express");
const app = express();
const Port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require("./routes/jokes.routes");
JokeRoutes(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});