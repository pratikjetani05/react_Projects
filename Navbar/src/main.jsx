import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import App from './App.jsx'


// const router =createBrowserRouter(
//   createRoutesFromElements(
    
//       //<Route path="" element={<Header/>} >
        
//         <Route path="/" element={<Home/>} >
//        </Route> 
    
//   )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>
)
