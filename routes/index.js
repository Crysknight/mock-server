let login = require('./login');

let greenlife = {
	press: require('./greenlife/press'),
	feedback: require('./greenlife/feedback')
};

let asTeam = {
	locations: require('./as-team/locations'),
	photos: require('./as-team/photos'),
	form: require('./as-team/form')
};

module.exports = {
	login,
	greenlife,
	asTeam
};