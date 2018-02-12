let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	s3.deleteObject({
		'Bucket': "hiru.sample",
		'Key': "test"
	}).promise()
		.then(data => {
			console.log(data);           // successful response
			/*
				data = {}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


	callback(null, 'Successfully executed');
}