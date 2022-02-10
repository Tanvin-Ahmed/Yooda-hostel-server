const mongoose = require("mongoose");
const { app } = require("../config/config");

const db_uri = app.dbUri;

if (!db_uri) console.error("db uri missing");

mongoose.connect(db_uri, error => {
	if (error) {
		console.error(`FAILED to connect using mongoose. ${error}`);
	} else {
		console.info(`Connected to DB server.`);
	}
});

module.exports = mongoose;
