import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveEnteredData, onCancelForm }) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [userInput, setInputUser] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = ev => {
		setEnteredTitle(ev.target.value);
		// setInputUser({
		// 	...userInput,
		// 	enteredTitle: ev.target.value,
		// });
		// setInputUser(prevState => ({
		// 	...prevState,
		// 	enteredTitle: ev.target.value,
		// }));
	};

	const amountChangeHandler = ev => {
		setEnteredAmount(ev.target.value);
		// setInputUser({
		// 	...userInput,
		// 	enteredAmount: ev.target.value,
		// });
		// setInputUser(prevState => ({
		// 	...prevState,
		// 	enteredAmount: ev.target.value,
		// }));
	};

	const dateChangeHandler = ev => {
		setEnteredDate(ev.target.value);
		// setInputUser({
		// 	...userInput,
		// 	enteredDate: ev.target.value,
		// });
		// setInputUser(prevState => ({
		// 	...prevState,
		// 	enteredDate: ev.target.value,
		// }));
	};

	const submitFormHandler = ev => {
		ev.preventDefault();

		if (!enteredTitle || !enteredAmount || !new Date(enteredDate)) {
			return;
		}

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		onSaveEnteredData(expenseData);
		setEnteredDate('');
		setEnteredTitle('');
		setEnteredAmount('');
		onCancelForm();
	};

	return (
		<form onSubmit={submitFormHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2019-01-01"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={onCancelForm}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
