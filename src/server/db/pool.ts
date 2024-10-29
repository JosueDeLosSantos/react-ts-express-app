process.loadEnvFile();
/* env variables should have the prefix VITE_
 * and be in the format VITE_CONNECTION_STRING="********"
 * instead of CONNECTION_STRING=********
 * otherwise vite will not process the environment variables
 */

import PG from "pg";

const Pool = PG.Pool;

const pool = new Pool({
	connectionString: process.env.VITE_CONNECTION_STRING
});

export default pool;
