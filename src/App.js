import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';


function App() {
  const router = routes
  return (
    <div className="bg-dark">
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
