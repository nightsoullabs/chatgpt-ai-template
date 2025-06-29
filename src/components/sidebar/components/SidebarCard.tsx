import {
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SidebarDocs() {
  const bgColor = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)';
  const borderColor = useColorModeValue('white', 'navy.800');

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={bgColor}
      borderRadius="16px"
      position="relative"
      p="20px"
    >
      <Text
        fontSize={{ base: 'lg', xl: '18px' }}
        color="white"
        fontWeight="bold"
        lineHeight="150%"
        textAlign="center"
        mb="14px"
      >
        Welcome to Horizon AI
      </Text>
      <Text fontSize="14px" color={'white'} textAlign="center">
        Start chatting with AI to get assistance with your projects and tasks.
      </Text>
    </Flex>
  );
}