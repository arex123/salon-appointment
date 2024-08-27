import './App.css'
import ForgetForm from './pages/ForgetForm.jsx'
import Login from './pages/Login.jsx'
import ResetForm from './pages/ResetForm.jsx'
import Signup from './pages/Signup.jsx'
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
