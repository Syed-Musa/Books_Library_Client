import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './Pages/HomePages/Home';
import LatestBooksDetails from './Components/LatestBooks/LatestBooksDetails';
import SignUp from './Pages/LoginSignUp/SignUp';
import SignIn from './Pages/LoginSignUp/SignIn';
import AuthProvider from './Providers/AuthProviders';
import PrivateRoute from './Providers/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/famouse/:id',
        element: <PrivateRoute><LatestBooksDetails></LatestBooksDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/famouse/${params.id}`)
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
