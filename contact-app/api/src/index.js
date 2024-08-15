const express = require("express");
require("express-async-errors");

const { connect, migrate } = require("./database");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
	console.log(error);
	response.sendStatus(500);
});

connect().then(() => {
	migrate();
	console.log("Database connected");
	app.listen(3001, () => console.log("Server started http://localhost:3001"));
});
