import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list';

const EmployeesList = ({ data }) => {

	const elements = data.map(item => {
		return (
			<EmployeesListItem {...item} /> //name={item.name} salary={item.salary} increase={item.increase}
		)
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}
export default EmployeesList;