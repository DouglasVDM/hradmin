import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';

const ListDepartments = () => {
	const [departments, setDepartments] = useState(
		[]
	);

	const getDepartments = async () => {
		try {
			const response = await fetch(
				"http://localhost:5000/departments"
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

	return (
		<Fragment>
			<h1 className="text-center mt-5">
				List Department
			</h1>
			<table className="table table-hover mt-5">
				<thead>
					<tr>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{departments.map(
						(department, index) => (
							<tr key={index}>
								<td>{department.description}</td>
								<td>Edit</td>
								<td>Delete</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</Fragment>
	);
};

export default ListDepartments;
