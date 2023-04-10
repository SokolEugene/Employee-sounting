
import './app-filter.css'

const AppFilter = (props) => {
	const buttonsData = [
		{ name: 'all', label: 'All staff' },
		{ name: 'rise', label: 'Employee up for promotion' },
		{ name: 'moreThen1k', label: 'Salary over 1k$' },
	];

	const buttons = buttonsData.map(({ name, label }) => {
		const active = props.filter === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light';
		return (
			<button className={`btn ${clazz}`}
				type='button'
				key={name}
				onClick={() => props.onFilterSelect(name)}>
				{label}
			</button>
		)
	})

	return (
		<div className="btn-group">
			{buttons}
			{/* <button
				className="btn btn-light"
				type='button'>
				All staff
			</button>
			<button
				className="btn btn-outline-light"
				type='button'>
				Employee up for promotion
			</button>
			<button
				className="btn btn-outline-light"
				type='button'>
				Salary over 1k$
			</button> */}
		</div>
	)
}

export default AppFilter