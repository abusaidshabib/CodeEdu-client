
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
