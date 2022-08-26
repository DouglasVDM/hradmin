import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';

// components
import EditDepartment from './EditDepartment';

const ListDepartments = () => {
	const [departments, setDepartments] = useState(
		[]
	);

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
	}, [departments]);

	const deleteDepartment = async (id) => {
		try {
			const deleteDepartment = await fetch(
				`http://localhost:5000/departments/${id}`,
				{
					method: 'DELETE',
				}
			);

			setDepartments(
				departments.filter(
					(department) =>
						department.department_id !== id
				)
			);

			console.log(`Deleted department: ${id}`);
		} catch (err) {
			console.error(err.message);
		}
	};

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
					{departments.map((department) => (
						<tr key={department.department_id}>
							<td>{department.description}</td>
							<td>
								<EditDepartment />
							</td>
							<td>
								<button
									className="btn btn-danger"
									onClick={() =>
										deleteDepartment(
											department.department_id
										)
									}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Fragment>
	);
};

export default ListDepartments;
