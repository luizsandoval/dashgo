import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
} from '@chakra-ui/react';

export default function Home() {
    return (
        <Flex w='100vw' h='100vh' as='main' align='center' justify='center'>
            <Flex
                p={8}
                as='form'
                width='100%'
                bg='gray.800'
                maxWidth={360}
                borderRadius={8}
                flexDir='column'
            >
                <Stack spacing='4'>
                    <FormControl>
                        <FormLabel htmlFor='email'>E-mail</FormLabel>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            variant='filled'
                            bgColor='gray.900'
                            focusBorderColor='pink.500'
                            _hover={{ bgColor: 'gray.900' }}
                            size='lg'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor='password'>Senha</FormLabel>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            variant='filled'
                            bgColor='gray.900'
                            focusBorderColor='pink.500'
                            _hover={{ bgColor: 'gray.900' }}
                            size='lg'
                        />
                    </FormControl>
                </Stack>
                <Button
                    type='submit'
                    marginTop='6'
                    colorScheme='pink'
                    size='lg'
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}
