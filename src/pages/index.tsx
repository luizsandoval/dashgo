import { Button, Flex, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

const SignIn = () => {
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
                    <Input name='email' label='E-mail' type='email' />
                    <Input name='password' label='Senha' type='password' />
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
};

export default SignIn;
