

import Home from './components/Home'
import {Route, Navigate, Routes} from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'

import AboutUs from './components/AboutUs'
import Clothes from './components/Clothes'
import Navbar from './components/Navbar'
import MovingGradient from './components/MovingGradient'
import Text from './components/Text'
import Navbar2 from './components/Navbar2'
import Search from './components/Search'

function App() {


  return (
    <>
      {/* <ShoppingCart/> */}
      {/* <AboutUs/> */}
      {/* <Clothes/>       */}
      {/* <Navbar/> */}
      {/* <Text/> */}
      {/* <MovingGradient/> */}
      <Navbar2/>
      {/* <Search/> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="*" element={<Navigate to="/" />} />
      </Routes> */}
      
    </>
  )
}


export default App
