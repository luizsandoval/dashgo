import { Flex, Icon, Input, Text } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

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
        </Flex>
    );
};

export { Header };
