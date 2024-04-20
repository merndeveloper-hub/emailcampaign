const express = require("express");
const bodyParser = require("body-parser");


const cors = require("cors");
const routes = require("./routes");
const morgan = require("morgan");

const app = express();




// * Cors
app.use(
    cors({
        origin: "*",
        credentialsL: "*",
    })
);

// * Body Parser
app.use(bodyParser.json({}));
// app.use(bodyParser.urlencoded({}));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("short"));



// * Api routes
app.use(
    "/api/v1",

    routes
);




app.get("/", async (req, res) => {
    return res.send("check");
    // return res.status(200).json({ status: 200, message: "Hello world on server side" });
});

app.use("*", (req, res) => {
    res.status(404).send("Route not found");
});

let PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
});
