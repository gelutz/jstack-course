const express = require("express");

require("express-async-errors");
require("dotenv").config();

const { connect, migrate } = require("./database");
const { cors } = require("./middlewares/cors");
const routes = require("./routes");
const { isProduction } = require("./utils/isProduction");

const app = express();
app.use(express.json());
app.use(cors);

app.use(routes);
app.use((error, request, response, next) => {
	console.log(error);
	return response.sendStatus(500);
});

connect().then(() => {
	console.log("Database connected");
	if (!isProduction()) {
		migrate();

		const port = process.env.API_PORT || 3001;

		app.listen(port, () =>
			console.log(`Server started http://localhost:${port}`)
		);
	}
});

if (isProduction()) {
	module.exports = app;
}
