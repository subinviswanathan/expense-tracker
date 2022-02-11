import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
	const [showForm, setShowForm] = useState(false);
	const saveEnteredDataHandler = enteredData => {
		const data = {
			...enteredData,
			id: Math.random().toString(),
		};
		onAddExpense(data);
	};

	const showOrHideFormHandler = () => {
		setShowForm(prevState => !prevState);
	};

	return (
		<div className="new-expense">
			{!showForm && (
				<button onClick={showOrHideFormHandler}>Add New Expense</button>
			)}
			{showForm && (
				<ExpenseForm
					onCancelForm={showOrHideFormHandler}
					onSaveEnteredData={saveEnteredDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
