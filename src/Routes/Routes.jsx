import { createBrowserRouter } from "react-router"
import App from "../App"
import Home from "../Pages/Home"
import Products from "../Pages/Products"

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/products',
    element:<Products/>
  }
])

export default router