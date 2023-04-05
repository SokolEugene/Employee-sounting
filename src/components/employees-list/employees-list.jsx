import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list';

const EmployeesList = ({ data, onDelete }) => {

	const elements = data.map(item => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				//name={item.name} salary={item.salary} increase={item.increase} аналог записи выше
				onDelete={() => onDelete(id)} />
		)
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}
export default EmployeesList;