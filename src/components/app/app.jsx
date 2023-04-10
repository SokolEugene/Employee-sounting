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
				{ name: 'Vlada', salary: 5500, increase: false, rise: true, id: 1 },
				{ name: 'Jack', salary: 100500, increase: true, rise: false, id: 2 },
				{ name: 'Eugene', salary: 50, increase: false, rise: false, id: 3 },
			]
		}
		this.maxId = 4;
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
	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item;
			})
		}))
	}


	// onToggleRise = (id) => {
	// 	this.setState(({ data }) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) {
	// 				return { ...item, rise: !item.rise }
	// 			}
	// 			return item;
	// 		})
	// 	}))
	// }

	// onToggleIncrease = (id) => {
	// 	this.setState(({ data }) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) {
	// 				return { ...item, increase: !item.increase }
	// 			}
	// 			return item;
	// 		})
	// 	}))
	// }
	// возвращаем новый объект у которого свойства data, метод map возвращает новый массив, через callbackFn которая находится внути. Когда идет переребор всех элементов и когда совпали id, значит нашли нужный объект, в таком случае возвращаем новый объект, который содерджит в себе все старые свойства + increase который поменялся на противоположный, если условие не совпала то просто возвращаем объект. как итог получаем новый массив объектов только с одни измененным объектом


	// this.setState(({ data }) => {
	// 	const index = data.findIndex(elem => elem.id === id);
	// 	const old = data[index];
	// 	const newItem = { ...old, increase: !old.increase };
	// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
	// 	return {
	// 		data: newArr
	// 	}
	// })

	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		return (
			<div className="app">
				<AppInfo employees={employees}
					increased={increased} />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;