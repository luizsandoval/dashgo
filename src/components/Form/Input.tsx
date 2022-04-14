import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
}

const Input = ({ name, label, ...rest }: InputProps) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                {...rest}
                id={name}
                name={name}
                variant='filled'
                bgColor='gray.900'
                focusBorderColor='pink.500'
                _hover={{ bgColor: 'gray.900' }}
                size='lg'
            />
        </FormControl>
    );
};

export { Input };
