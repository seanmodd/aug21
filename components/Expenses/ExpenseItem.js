import { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'black',
    dark: 'white',
  };
  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };
  return (
    <>
      <Box boxShadow="base" bg={bgColor[colorMode]} p={10} borderRadius="xl">
        <VStack>
          <Heading color="red" fontSize="2xl">
            {title}
          </Heading>
          <ExpenseDate date={props.date} />
          <Text fontSize="xl" color="green">
            ${props.amount}
          </Text>
          <Button colorScheme="twitter" onClick={clickHandler}>
            More Info...
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default ExpenseItem;
