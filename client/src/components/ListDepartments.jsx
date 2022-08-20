import React, { Fragment, useState } from 'react';

const ListDepartment = () => {

const [description, setDescription] = useState('');

const onSubmitForm = async (event)=>{
	event.preventDefault();

	try {
		const body = {description};
		const response = await fetch("http://localhost:5000/departments", {
			method: "GET",
			headers: {"Content-Type":"application/json"},
			body: JSON.stringify(body)
		});

		console.log(response);

	} catch (err) {
		console.error(err.message)
	}
}

	return (
		<Fragment>
			<h1 className='text-center mt-5'>List Department</h1>
			<table class="table table-hover mt-5">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</Fragment>
	)
}

export default ListDepartment;
