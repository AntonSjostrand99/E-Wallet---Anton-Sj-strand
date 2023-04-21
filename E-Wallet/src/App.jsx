import { useState } from 'react'
import './App.scss'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import Home from './views/Home/Home';
import AddCard from './views/AddCard/AddCard';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/addcard',
    element: < AddCard />,
    errorElement: <Error />
  },
 
]);


function App() {
  

  return (
    <div className="App">
        <RouterProvider router={ router }/>

    </div>
  )
}

export default App
