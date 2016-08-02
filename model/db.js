var mongoose = require('mongoose'),
	dbURI = 'mongodb://localhost/umimi';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});

var userSchema = new mongoose.Schema({
	name: {type: String, unique: true, required: true},
	update: {type: Date, default: Date.now()},
	cao: Array
});
mongoose.model('User', userSchema);

var projectSchema = new mongoose.Schema({
	projectName: {type: String, unique: true, required: true},
	createBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	update: {type: Date, default: Date.now()}
});
mongoose.model('Project', projectSchema);
