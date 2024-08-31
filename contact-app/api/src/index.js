const express = require("express");
require("express-async-errors");

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
	response.sendStatus(500);
});

connect().then(() => {
	migrate();
	console.log("Database connected");
	console.log(process.env.prod, process.env.NODE_ENV, process.env);
	if (!isProduction()) {
		console.log("dev env");
		app.listen(3001, () => console.log("Server started http://localhost:3001"));
	}
});

if (isProduction()) {
	console.log("prod env");
	module.exports = app;
}
