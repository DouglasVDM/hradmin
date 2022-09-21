import React from 'react'

const Users = () => {
	const [users, setUsers] = useState();

	useEffect(() => {
		let isMounted = true;

		const controller = new AbortController();

		const getUsers= async ()=>{
			try {
const usersResponse = await axios.get('/users',{
	signal: controller.signal
});
console.log('usersResponse', usersResponse.data);
isMounted && setUsers(usersResponse.data);
			} catch (err) {
				console.error(err.message);
			};
		};

		getUsers();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [])

	return (
		<article>
			<h2>Users</h2>
			{users?.length
			?(
				<ul>
					{users.map((user, index) =>
					<li key={index}>
						{user?.username}
					</li>)}
				</ul>

			) : <p>No users to display</p>
			}
		</article>
	);
}

export default Users
