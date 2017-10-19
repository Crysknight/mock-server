let login = require('./login');

let greenlife = {
	press: require('./greenlife/press'),
	feedback: require('./greenlife/feedback')
};

let asTeam = {
	locations: require('./as-team/locations')
};

module.exports = {
	login,
	greenlife,
	asTeam
};