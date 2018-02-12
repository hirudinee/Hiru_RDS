let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
	s3.getObject({
		'Bucket': "hiru.demo01",
		'Key': "test"
	}).promise()
		.then(data => {
			console.log(data);           // successful response
			/*
			data = {
				CopyObjectResult: {
					ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
					LastModified: <Date Representation>
				}
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});
	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:263248768798:hiru'
	}).promise()
		.then(data => {
			console.log(data); // your code goes here
		})
		.catch(err => {
			console.log(err, err.stack); // error handling goes here
		});




	callback(null, 'Successfully executed');
}