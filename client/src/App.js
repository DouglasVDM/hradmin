
import { Fragment } from 'react';
import './App.css';

// components
import InputDepartment from './components/InputDepartment';
import ListDepartment from './components/ListDepartments';


function App() {
	return (
		<Fragment>
			<div className="container">
				<InputDepartment />
				<ListDepartment />
			</div>
		</Fragment>
	);

}

export default App;
