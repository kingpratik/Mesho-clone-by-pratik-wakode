// import './App.css';
import Header from './Component/Header/Header';

import Footer from './Component/footer/Footer';
import {
  createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Outlet
} from "react-router-dom";
import Home from "./Component/Pages/Home"
import { ProductsData } from './Api/api';
import Signin from './Component/Pages/Signin';




const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={ProductsData}></Route>
      <Route path="/Signin" element={<Signin/>}></Route>
    </Route>



  ))

  return (
    <div className=' font-bodyfont bg-gray-100 h-full m-0 p-0 '>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  ); 
}

export default App;
