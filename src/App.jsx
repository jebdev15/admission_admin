import React from 'react';
import Layout from "./layout/Layout";
import EntryData from "./components/EntryData";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import {Typography} from '@mui/material'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Typography variant="body1" color="initial">Page not found</Typography>,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/home/start",
        element: <Typography variant="body1" color="initial">Homepage</Typography>,
      },
      {
        path: "/home/entries",
        element: <EntryData />, 
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
