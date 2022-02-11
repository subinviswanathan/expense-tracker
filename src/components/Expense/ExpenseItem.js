import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem({ title, amount, date }) {
	const [titleText, setTitle] = useState(title || '');
	const clickHandler = () => {
		setTitle('Updated');
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{titleText}</h2>
				<div className="expense-item__price">Rs {amount}</div>
			</div>
			<button style={{ display: 'none' }} onClick={clickHandler}>
				Change
			</button>
		</Card>
	);
}

export default ExpenseItem;
