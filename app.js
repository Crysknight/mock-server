let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
let moment = require('moment');

let routes = require('./routes');

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.post('/api/login', (req, res) => routes.login(req, res));
app.get('/api/login', (req, res) => routes.login(req, res));

app.get('/greenlife/press', (req, res) => routes.greenlife.press(req, res));


app.listen(80);



console.log('Running on port 80... --- ' + moment().format('HH:mm:ss'));
