import { useEffect, useState } from "react";

type usernames = {
	id: number;
	username: string;
};

const Hello = () => {
	const [users, setUsers] = useState<usernames[]>([]);

	useEffect(() => {
		fetch("/hello")
			.then((res) => res.json())
			.then((data) => setUsers(data.users))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<ul>
				{users.length > 0 &&
					users.map((user) => <li key={user.id}>{user.username}</li>)}
			</ul>
		</div>
	);
};

export default Hello;
