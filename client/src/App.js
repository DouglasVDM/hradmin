import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

// components
import InputDepartment from './components/InputDepartment';
import ListDepartment from './components/ListDepartments';


function App() {

	const counter = useSelector(state => state.counter);

	const [departments, setDepartments] = useState([]);

	const getDepartments = async () => {
		try {
			const response = await fetch(
				'http://localhost:5000/departments'
			);
			const jsonData = await response.json();

			setDepartments(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getDepartments();
	}, []);

	console.log(departments);

	return (
		<Fragment>
			<div className="container">
				<InputDepartment departments={departments} setDepartments={setDepartments} />
				<ListDepartment departments={departments} setDepartments={setDepartments} />
			</div>
		</Fragment>
	);

}

export default App;
