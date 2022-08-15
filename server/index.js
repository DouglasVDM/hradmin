const express = require("express");
const cors = require("cors");
require('dotenv').config();
const pool = require("./db");

const app = express();
let PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// create a department
app.post("/departments", async (req, res) => {
	try {
		const { description } = (req.body);
		const newDepartment = await pool.query("INSERT INTO department (description) VALUES($1) RETURNING *", [description]
		);

		res.json(newDepartment.rows[0]);
	} catch (err) {
		console.error(err.message);
	}

});

// get all departments
app.get("/departments", async (req, res) => {
	try {
		const allDepartments = await pool.query("SELECT * FROM department");
		res.json(allDepartments.rows)
	} catch (err) {
		console.error(err.message);
	}
})

// get a department by id
app.get("/departments/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const department = await pool.query("SELECT * FROM department WHERE department_id = $1", [id]);

		res.json(department.rows)
	} catch (err) {
		console.error(err.message);
	}
})

// update a department
app.put("/departments/:id", async (req, res) => {
	const { id } = req.params;
	const { description } = (req.body);
	try {
		const updateDepartment = await pool.query("UPDATE department SET description = $1 WHERE department_id = $2", [description, id]);

		res.json(`Department ${id} description was updated to ${description}!`)
	} catch (err) {
		console.error(err.message);
	}
});

// delete a department
app.delete("/departments/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deleteDepartment = await pool.query("DELETE FROM department WHERE department_id = $1", [id]);

		res.json(`Department id: ${id} deleted!`)
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
});
