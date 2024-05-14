import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
