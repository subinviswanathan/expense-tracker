import React, { useState } from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
	{
		id: 'e1',
		title: 'Bike Insurance',
		amount: 2000,
		date: new Date(2021, 9, 28),
	},
	{
		id: 'e2',
		title: 'Rent',
		amount: 12000,
		date: new Date(2021, 9, 19),
	},
	{
		id: 'e3',
		title: 'Shopping',
		amount: 2000,
		date: new Date(2021, 9, 8),
	},
	{
		id: 'e4',
		title: 'Recharge',
		amount: 200,
		date: new Date(2021, 9, 1),
	},
];

function App() {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

	const addExpenseHandler = expense => {
		setExpenses(prevState => [expense, ...prevState]);
	};

	// return React.createElement(
	// 	'div',
	// 	{},
	// 	React.createElement(Expenses, { items: expenses })
	// );

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
