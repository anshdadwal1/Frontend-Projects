import React from 'react'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './Components/Fruits/Fruits'
import Dairy from './Components/Dairy/Dairy'
import SeaFood from './Components/SeaFood/SeaFood'
import AllProducts from './Components/AllProducts/AllProducts'
import Layout from './Components/Layout/Layout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/' ,    
          element: <Home />,
        },
        {
          path: 'Fruits',
          element: <Fruits />,
        },
        {
          path: 'Dairy',
          element: <Dairy />,
        },
        {
          path: 'SeaFood',
          element: <SeaFood />,
        },
        {
          path: 'All Products',   
          element: <AllProducts />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
