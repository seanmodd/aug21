import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Heading,
  VStack,
  Box,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const Index = () => (
  <VStack>
    <Heading fontSize="6xl">Here</Heading>

    <Box
      bg="tomato"
      color="gray.50"
      fontSize="4xl"
      fontWeight="extrabold"
      bgGradient="linear(to-l, #7928CA,#FF0080)"
      bgClip="text"
    >
      Here
    </Box>
  </VStack>
);

export default Index;
