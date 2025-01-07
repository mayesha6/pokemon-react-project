import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Favourite from "./pages/Favourite/Favourite"
import AppLayout from './layout/AppLayout/AppLayout';
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/favourite',
          element:<Favourite/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/pokemon/:name',
          element:<DetailedInfo/>
        }
      ]
    },
    
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App