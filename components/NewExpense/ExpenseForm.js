import { Button, VStack, Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';

import styles from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <VStack>
        <div className={styles.newExpense__controls}>
          <VStack>
            <Heading py={5}>The New Expense Form</Heading>
            <div className={styles.newExpense__control}>
              <label>Title</label>
              <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className={styles.newExpense__control}>
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div className={styles.newExpense__control}>
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </VStack>
        </div>
        <div className={styles.newExpense__actions}>
          <Button type="submit">Add Expense</Button>
        </div>
      </VStack>
    </form>
  );
};

export default ExpenseForm;
