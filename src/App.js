import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contacto',
        element: <Contact />
      },
      {
        path: '/nosotros',
        element: <AboutUs />
      },
      {
        path: '/proyectos',
        element: <Projects />
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
