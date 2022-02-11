import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses({ items = [] }) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangedHandler = filterYear => {
		setFilteredYear(filterYear);
	};

	const filteredItems = items.filter(
		item => new Date(item.date).getFullYear().toString() === filteredYear
	);

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onFilterChange={filterChangedHandler}
			/>
			<ExpensesChart expenses={filteredItems} />
			<ExpensesList items={filteredItems} />
		</Card>
	);
}

export default Expenses;
