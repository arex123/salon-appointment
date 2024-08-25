import './App.css'
import ForgetForm from './component/ForgetForm'
import Login from './component/Login'
import ResetForm from './component/ResetForm'
import Signup from './component/Signup'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx'


function App() {
  
  const Layout = ()=>{
    return (
      <div>
        {/* navbar */}
        {/* main content */}
        {/* footer */}
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"register",
      element:<Signup/>
    },
    {
      path:"forget-password",
      element:<ForgetForm/>
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
