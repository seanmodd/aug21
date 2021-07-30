import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className={styles.newExpense}>
      {!isEditing && (
        <Button onClick={startEditingHandler}> Add New Expense </Button>
      )}
      {isEditing && <Button onClick={stopEditingHandler}> Cancel </Button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
