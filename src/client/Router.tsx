import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Hello from "./pages/Hello";

/*
 * routes in the React Router should be different from the server's routes
 * example: server: '/hello', client: '/hello2'
 */

const Router = () => {
	// MARK: Router
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />
		},
		{
			path: "/hello2",
			element: <Hello />
		}
	]);
	return <RouterProvider router={router} />;
};

export default Router;
