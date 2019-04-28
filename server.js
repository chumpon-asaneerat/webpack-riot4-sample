const path = require("path");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const favicon = require("serve-favicon");

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

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
    res.status(200).send(`It's work!!!`);
});

/**
 * @swagger
 * /test:
 *   post:
 *     description: Login 123
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: test
 *         description: Items list array
 *         in: formData
 *         required: false
 *         type: array
 *         collectionFormat: multi
 *         items:
 *            type: "integer"
 *       - name: profileId
 *         description: Password
 *         in: formData
 *         required: true
 *         type: string
 *       - name: file
 *         description: File To Upload
 *         in: formData
 *         required: false
 *         type: file
 *     responses:
 *       200:
 *         description: OK result in json object.
 */
app.post('/test', function(req, res) {
	console.log('req', req)
	res.status(200).json({ status: 'OK'});
});

/**
 * @swagger
 * /bar:
 *   get:
 *     description: home get api
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: result in json object.
 */
app.get('/bar', function(req, res) { 
    res.status(200).json({ status: 'OKISH'}); 
});

// set swagger (used jsdoc)
const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: 'My App API',
            version: '1.0.0'
        }
    },
    //apis: ['./routes/index.js']
    apis: ['./server.js']
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// set swagger (used external json)
/*
const swaggerDocument = require('./swagger.json');
let swaggerOpts = { explorer: false };
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOpts));
*/

const server = app.listen(PORT, () => {
    console.log(`${APPNAME} listen on port: ${PORT}`);
});