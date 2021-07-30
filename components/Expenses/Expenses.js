import { VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import styles from './Expenses.module.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <div className={styles.expenses}>
        <VStack>
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
        </VStack>
      </div>
      <ExpensesList items={filteredExpenses} />
    </>
  );
}

export default Expenses;
