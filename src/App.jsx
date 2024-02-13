import Layout from "./layout/Layout";
import Dashboard from "./components/Dashboard";
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
    path: "/admin",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/admin/dashboard",
        element: <Dashboard />
      },
      {
        path: "/admin/entries",
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
