
import './app-filter.css'

const AppFilter = () => {
	return (
		<div className="btn-group">
			<button
				className="btn btn-light"
				type='button'>
				All staff
			</button>
			<button
				className="btn btn-outline-light"
				type='button'>
				Employee up for promotion
			</button><button
				className="btn btn-outline-light"
				type='button'>
				Salary over 1k$
			</button>
		</div>
	)
}

export default AppFilter