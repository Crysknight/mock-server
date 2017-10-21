module.exports = (req, res) => {
	console.log(req.body);
	if (req.body.name === 'Павел') {
		setTimeout(() => {
			res.status(500).send('Пошел нахуй, Павел');
		}, 1500);
	} else {
		setTimeout(() => {
			res.send('ok');
		}, 500);
	}
};