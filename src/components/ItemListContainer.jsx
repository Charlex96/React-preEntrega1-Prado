

import { Container, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <>

            <Container h='100' backgroundColor='black' maxW='container.lg'>
                <Flex color='white'>
                    <Center w='1000px'>
                        <Text>{greeting}</Text>
                    </Center>
                </Flex>
            </Container>
        
        </>
    )
}

export default ItemListContainer