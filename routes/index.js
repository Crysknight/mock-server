let login = require('./login');

let greenlife = {
	press: require('./greenlife/press'),
	feedback: require('./greenlife/feedback')
};

module.exports = {
	login,
	greenlife
};