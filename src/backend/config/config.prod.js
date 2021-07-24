var	fs = require('fs');
var path = require('path');

module.exports = {
	mode: 'prod',
	https :
	{		
		port: 4000,
		options:{
			key: fs.readFileSync(__dirname + '/key.pem'),
			cert: fs.readFileSync(__dirname + '/cert.pem')
		}
	},
	pre_app: [
	],
	databases : [
	],
	in_app : {
		pre_routing : [
			"./vendors/app/express/express.js",			
		],
		post_routing : [
		],
	},
	post_app: [
	]
}
