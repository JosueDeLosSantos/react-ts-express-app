import { Link } from "react-router-dom";

function App() {
	return (
		<div className='flex flex-col items-center p-16 font-bold text-3xl'>
			<h1>User's club</h1>
			<Link to='/hello2'>
				<button
					type='button'
					className='bg-gray-300 border mt-8 border-gray-500 rounded px-4 py-2 font-semibold'
				>
					Show all users
				</button>
			</Link>
		</div>
	);
}

export default App;
