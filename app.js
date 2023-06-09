const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const sequelize = require("./sources/db/sequelize");

const app = express();
const port = 3000;

app
	.use(favicon(__dirname + "/favicon.ico"))
	.use(morgan("dev"))
	.use(bodyParser.json());

sequelize.initDb();

require("./sources/routes/findAllPokemons")(app);
require("./sources/routes/findPokemonByPk")(app);
require("./sources/routes/createPokemon")(app);
require("./sources/routes/updatePokemon")(app);
app.listen(port, () =>
	console.log(
		`Notre application Node est démarrée sur : http://localhost:${port}`
	)
);
