import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Home from './Pages/home'
import Login from './Pages/login'
import Products from './Pages/products'
import ProductsList from './Pages/productsList'
import About from './Pages/about'
import SingleProduct from './Pages/singleProduct'
import NavBar from './Components/navbar'


function App() {
return (
  <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/products' element={<Products/>}> 
        <Route index element={<ProductsList/>} />
        <Route path=':id' element={<SingleProduct/>} />
      </Route>
      <Route path='/about' element={<About/>} />
      
    </Routes>
  </BrowserRouter>
)
}

export default App
  