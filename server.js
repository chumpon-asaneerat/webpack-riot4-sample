const path = require("path");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const favicon = require("serve-favicon");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

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

app.post('/test', function(req, res) {
	console.log('req', req)
	res.json({ status: 'OK'});
});
app.get('/bar', function(req, res) { res.json({ status: 'OKISH'}); });

// set swagger ui
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = app.listen(PORT, () => {
    console.log(`${APPNAME} listen on port: ${PORT}`);
});