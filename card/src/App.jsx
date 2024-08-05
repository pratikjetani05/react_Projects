

// import ActiveSlider from './components/ActiveSlider'
import Home from './components/Home'
import {Route, Navigate, Routes} from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'

import AboutUs from './components/AboutUs'
import Clothes from './components/Clothes'
import Navbar from './components/Navbar'
import MovingGradient from './components/MovingGradient'
import Text from './components/Text'

function App() {


  return (
    <>
      {/* <ShoppingCart/> */}
      {/* <AboutUs/> */}
      {/* <Clothes/>       */}
      {/* <Navbar/> */}
      <Text/>
      {/* <MovingGradient/> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path='' element={<ActiveSlider/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes> */}
      
    </>
  )
}


export default App
