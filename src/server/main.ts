import express from "express";
import ViteExpress from "vite-express";
import { getAllUsernames } from "./db/queries.js";
process.loadEnvFile();
/* env variables should have the prefix VITE_
 * and be in the format VITE_CONNECTION_STRING="********"
 * instead of CONNECTION_STRING=********
 * otherwise vite will not process the environment variables
 */

const app = express();

const PORT = process.env.VITE_PORT || 3000;

app.get("/hello", async (_, res) => {
	const { rows } = await getAllUsernames();
	res.json({ users: rows });
});

ViteExpress.listen(app, Number(PORT), () =>
	console.log("Server is listening on port 3000...")
);
