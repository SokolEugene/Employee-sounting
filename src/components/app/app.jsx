import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Vlada', salary: 5500, increase: false, id: 1 },
				{ name: 'Jack', salary: 100500000, increase: true, id: 2 },
				{ name: 'Eugene', salary: 50, increase: false, id: 3 },
			]
		}
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
			// const index = data.findIndex(elem => elem.id == id);
			// const before = data.slice(0, index);
			// const after = data.slice(index + 1);
			// const newArr = [...before, ...after];
			// return {
			//	data: newArr
			// }
		})
	}

	render() {
		//const { data } = this.state;
		return (
			<div className="app" >
				<AppInfo />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem} />
				<EmployeesAddForm />
			</div>
		);
	}
}

export default App;