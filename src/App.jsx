import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  
  const router = createBrowserRouter([
    {path : '/', element : <Layout/>,
      children: [
        {path: '/', element: <HomePage/>},
        {path: '/about', element: <AboutPage/>},
      ]
    }
  ]);
  
  return (
    <>
     <RouterProvider router={router}>
     </RouterProvider>
    </>
  )
}

export default App
