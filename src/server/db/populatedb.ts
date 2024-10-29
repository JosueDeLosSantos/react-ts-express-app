#! /usr/bin/env node

process.loadEnvFile();
/* env variables should have the prefix VITE_
 * and be in the format VITE_CONNECTION_STRING="********"
 * instead of CONNECTION_STRING=********
 * otherwise vite will not process the environment variables
 */

import PG from "pg";

const Client = PG.Client;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Josue'),
  ('Nata'),
  ('Isaac');
`;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString: process.env.VITE_CONNECTION_STRING
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();
