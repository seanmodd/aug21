import React from 'react';
import { VStack } from '@chakra-ui/react';
import ExpenseItem from './ExpenseItem';
import styles from './ExpensesList.module.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <>
        <VStack p={10}>
          <h2 className={styles.expensesList__fallback}>Found no expenses.</h2>
        </VStack>
      </>
    );
  }

  return (
    <ul className={styles.expensesList}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
