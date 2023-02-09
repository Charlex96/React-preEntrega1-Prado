import React from 'react'
import CartWidget from './CartWidget'
import {ChevronDownIcon} from '@chakra-ui/icons'

import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Avatar,
  MenuItem,
  Spacer,
  Container,
  Flex,
  Box,
  Heading,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>


      <Container maxW='250rem' bg='blue.100' color='black'>

        <Flex alignItems='center' gap='2'>

          <Avatar 
            size='xl' 
            src='https://i.pinimg.com/236x/e1/a0/be/e1a0bedc277952964c385c72219296da.jpg' 
          />

          <Box p='10'>
            <Heading size='md'>CC Store</Heading>
          </Box>

          <Spacer/>

          <Box>
            <Menu>
              <MenuButton 
                as={Button} 
                size='lg'
                variant = 'outline'
                colorScheme = 'teal'
                rightIcon={<ChevronDownIcon />}
              >
                Categorias
              </MenuButton>
              <MenuList>
                <MenuItem>Hombres</MenuItem>
                <MenuItem>Mujeres</MenuItem>
                <MenuItem>Niños</MenuItem>
                <MenuItem>Colección</MenuItem>
                <MenuItem>Nueva Colección</MenuItem>
              </MenuList>
            </Menu>

          </Box>

          <Spacer/>

          <Box  p='5' >
            <CartWidget/>
          </Box>





        </Flex>

      </Container>
    
    </>
  )
}

export default NavBar