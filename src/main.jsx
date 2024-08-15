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
import AddBooks from './Pages/AddBooks/AddBooks';
import AllBooks from './Pages/AllBooks/AllBooks';
import AllBooksDtl from './Pages/AllBooks/AllBooksDtl';
import UpdatePage from './Pages/Update/UpdatePage';


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
        path: '/addbooks',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/allbooks',
        element: <AllBooks></AllBooks>
      },
      {
        path: '/allbooks/:id',
        element: <PrivateRoute><AllBooksDtl></AllBooksDtl></PrivateRoute>,
        loader: ({params}) => fetch(`https://books-library-server-smoky.vercel.app/allbooks/${params.id}`)
      },
      {
        path: '/famouse/:id',
        element: <PrivateRoute><LatestBooksDetails></LatestBooksDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://books-library-server-smoky.vercel.app/famouse/${params.id}`)
      },
      {
        path: '/updateBooks/:id',
        element: <UpdatePage></UpdatePage>,
        loader: ({params}) => fetch(`https://books-library-server-smoky.vercel.app/allbooks/${params.id}`)
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
