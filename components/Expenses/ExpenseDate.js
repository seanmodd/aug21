import { Box, Heading, useColorMode, VStack } from '@chakra-ui/react';
import styles from './ExpenseDate.module.css';

function ExpenseDate(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'blackbg',
    dark: 'whitebg',
  };
  const textColor = {
    light: 'white',
    dark: 'black',
  };
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <Box boxShadow="base" p={5} bgColor={bgColor[colorMode]}>
      <VStack>
        <Heading
          fontSize="lg"
          className={styles.month}
          color={textColor[colorMode]}
        >
          {month}
        </Heading>

        <Heading
          fontSize="md"
          color={textColor[colorMode]}
          className={styles.expenseDay}
        >
          {day}
          <sup>th</sup>
        </Heading>
        <Heading
          fontSize="lg"
          color={textColor[colorMode]}
          className={styles.expenseYear}
        >
          {year}
        </Heading>
      </VStack>
    </Box>
  );
}

export default ExpenseDate;
