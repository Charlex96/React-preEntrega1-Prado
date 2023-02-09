import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import CartWidget from './components/CartWidget'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer greeting= 'Bienvenidos'/>
      </div>
    </>
  )
}

export default App