import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react';
import {
    RiNotificationLine,
    RiSearchLine,
    RiUserAddLine,
} from 'react-icons/ri';

const Header = () => {
    return (
        <Flex
            h='20'
            mt='4'
            px='6'
            w='100%'
            mx='auto'
            as='header'
            align='center'
            maxWidth={1480}
        >
            <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
                dashgo
                <Text color='pink.500' as='span' ml='1'>
                    .
                </Text>
            </Text>
            <Flex
                py='4'
                px='8'
                ml='6'
                flex='1'
                as='label'
                bg='gray.800'
                maxWidth={400}
                color='gray.200'
                alignSelf='center'
                position='relative'
                borderRadius='full'
            >
                <Input
                    px='4'
                    mr='4'
                    color='gray.50'
                    variant='unstyled'
                    placeholder='Buscar na plataforma'
                    _placeholder={{ color: 'gray.400' }}
                />
                <Icon as={RiSearchLine} fontSize='20' />
            </Flex>
            <Flex align='center' ml='auto'>
                <HStack
                    spacing='8'
                    mx='8'
                    pr='8'
                    py='1'
                    color='gray.300'
                    borderRightWidth='1px'
                    borderColor='gray.700'
                >
                    <Icon as={RiNotificationLine} fontSize='20' />
                    <Icon as={RiUserAddLine} fontSize='20' />
                </HStack>
                <Flex align='center'>
                    <Box marginRight="4" textAlign="right">
                        <Text>Luiz Sandoval</Text>
                        <Text color="gray.300" fontSize="small">lgustavo728@gmail.com</Text>
                    </Box>
                    <Avatar name="Luiz Sandoval" size="md" src="https://github.com/luizsandoval.png" />
                </Flex>
            </Flex>
        </Flex>
    );
};

export { Header };
