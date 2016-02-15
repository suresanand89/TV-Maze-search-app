var superagent = require('superagent');

module.exports = function (app) {
	app.get('/api/:type', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://api.tvmaze.com/search/shows?q=' + req.query.name)
			.query({ json: true })
			.set('Accept', 'application/json')
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}

				else { 
					res.json(response);
				}
			});

	});
}