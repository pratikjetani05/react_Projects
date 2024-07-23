

import ActiveSlider from './components/ActiveSlider'
import Home from './components/Home'
import {Route, Navigate, Routes} from 'react-router-dom'

function App() {


  return (
    <>
      <Home/>
      
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path='' element={<ActiveSlider/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes> */}
      
    </>
  )
}


export default App
