const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || 3000);

        // Add headers
    app.use((req, res, next) => {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    load('models', {cwd: 'app'})
        .then('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}