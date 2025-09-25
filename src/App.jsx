import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import Footer from './Footer/Footer';
import Men from './Pages/Men.jsx';
import Women from './Pages/women.jsx';

function AppContent() {
  const location = useLocation();
  return (
    <>
      <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path="product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Signup/>}/>
          </Routes>
          {location.pathname !== "/login" && <Footer/>}        
      </div>
    </>
  )
}

function App(){
  return(
    <BrowserRouter>
      <AppContent/>  
    </BrowserRouter>
  )
}

export default App
