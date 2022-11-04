
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import Footer from './Components/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from './Context/UserContext/UserContext';


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
