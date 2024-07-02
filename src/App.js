import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Layout from './Ui/Layout';
import About from './Pages/About';
import Team from './Pages/Team';
import FaqPage from './Pages/FaqPage';
import BoobkingPage from './Pages/Booking';
import LoginPage from './Pages/Login';
import ForgetPassPage from './Pages/ForgetPass';
import Register from './components/Register/Register';

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/Meditro',
        element: <Home /> 
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/team',
        element: <Team />
      },
      {
        path: '/faq',
        element: <FaqPage />
      },
      {
        path: '/booking',
        element: <BoobkingPage />
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/forget',
    element: <ForgetPassPage />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return ( <RouterProvider router={router} /> );
}

export default App;
