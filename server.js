const path = require("path");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const favicon = require("serve-favicon");

const APPNAME = "Express Project";
const PORT = 3000;

const app = express();

app.use(helmet());
app.use(morgan("dev"));

app.use(cookieparser("YOUR_SECURE_KEY@123"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const iconpath = path.join(__dirname, "public", "favicon.ico");
app.use(favicon(iconpath));

app.get("/", (req, res) => {
    res.send(`It's work!!`);
});

const server = app.listen(PORT, () => {
    console.log(`${APPNAME} listen on port: ${PORT}`);
});