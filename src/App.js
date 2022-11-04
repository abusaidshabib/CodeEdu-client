
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import Footer from './Components/Footer/Footer';
<<<<<<< HEAD
import { useContext } from 'react';
import { AuthContext } from './Context/UserContext/UserContext';

=======
>>>>>>> 89e46c5d218e579aa1ec3cceb49b643e379a4002

function App() {

  const {mode} = useContext(AuthContext);

  return (
    <div className={`${mode}`}>
      <RouterProvider router={routes}></RouterProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
