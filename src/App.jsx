import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/men' element={<ShopCategory category ="men"/>}/>
            <Route path='/women' element={<ShopCategory category ="Women"/>}/>
            <Route path="product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
