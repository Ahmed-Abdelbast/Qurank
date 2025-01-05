// import { useState } from 'react'

import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Layout from './Components/layout/Layout'
import Home from './Components/Home/Home'
import Quran from './Components/Quran/Quran';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {



 let router = createBrowserRouter([
    {path:"" , element:<Layout /> , children:[
      {path:"" , element:<Home />},
      {path:"home" , element:<Home />},
      {path:"quran" , element:<Quran />},
      {path:"*" , element:<PageNotFound />},
    ]}
  ])


  return (
    <div dir="rtl">
    <RouterProvider router={router}/>
   
    </div>
  )
}

export default App
