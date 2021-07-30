import { propNames, VStack } from '@chakra-ui/react';
import React from 'react';

import styles from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    console.log(e.target.value);
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className={styles.expensesFilter}>
      <div className={styles.expensesFilter__control}>
        <VStack>
          <label>Filter by year</label>
          <select
            style={{ backgroundColor: 'black' }}
            value={props.selected}
            onChange={dropdownChangeHandler}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </VStack>
      </div>
    </div>
  );
};

export default ExpensesFilter;
