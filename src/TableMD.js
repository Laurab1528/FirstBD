const express = require("express");
const { options } = require("../options/ConfigMariaDB");
const knex = require("knex")(options);


app.use(express.json());

knex.schema
	.createTable("products", (table) => {
		table.increments("id");
		table.string("title", 40);
    table.string("thumbnail");
		
	})
	.then(() => console.log("table created"))
	.catch((err) => console.log(err))
	.finally(() => knex.destroy());
