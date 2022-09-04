const { sqlite3Connect } = require("../options/ConfigSQLite");
const knex = require("knex")(sqlite3Connect);

knex.schema
	.createTable("messages", (table) => {
		table.increments("id");
		table.string("email", 40);
		table.string("message");
		table.timestamp("date").defaultTo(knex.fn.now());
	})
	.then(() => console.log("table por SQLite3 created"))
	.catch((err) => console.log(err))
	.finally(() => knex.destroy());

