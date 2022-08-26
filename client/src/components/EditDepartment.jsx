import React, { Fragment, useState } from 'react';

const EditDepartment = ({ department }) => {
	const [description, setDescription] = useState(
		department.description
	);

	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-warning"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Edit
			</button>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="exampleModalLabel"
							>
								Edit Department
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<input
								type="text"
								className="form-control"
								value={description}
							/>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								data-bs-dismiss="modal"
							>
								Save changes
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Exit
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default EditDepartment;
