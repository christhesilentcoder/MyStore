import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import MainLayout from './layout/MainLayout'
import Productdetails from './pages/Productdetails'
import Cart from './pages/Cart'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='product/:id' element={<Productdetails/>}/> 
      <Route path = 'cart' element = {<Cart/>}/>
    
    
    </Route>
  )
)
function App() {
  

  return (
      <div >

        <RouterProvider router={router}/>
      </div>
      
  
  );
}

export default App
