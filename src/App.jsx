
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/admin/Dashboard'
import BlogList from './pages/BlogList'
import Header from './components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import AddBlog from './pages/admin/update/AddBlog'
import EditBlog from './pages/admin/update/EditBlog'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import { useContext } from 'react';
import { GlobalThemeContext } from '../src/components/Context/ThemeContext';
import PrivateRoute from './user-routes/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register'
import Wishlist from './pages/Wishlist'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from 'react-use-wishlist'
import Basket from './pages/Basket'
import Successfull from './components/Successfull'


const App = () => {
  const { darkMode } = useContext(GlobalThemeContext);
  return (
    <main className={darkMode ? "dark" : "light"}>
          <BrowserRouter>
          <CartProvider>
            <WishlistProvider>
              <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blogs' element={<BlogList />}></Route>
          <Route path='/admin' element={<Dashboard />}></Route>
          <Route path='/admin/add' element={<AddBlog />}></Route>
          <Route path='/admin/edit/:id' element={<EditBlog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/buy' element={<Successfull/>}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/wish' element={<Wishlist/>}></Route>
          <Route path='/products/:id' element={<ProductDetails/>}></Route>
          <Route path='*' element={<Home />}></Route>
          <Route path='/basket' element={<Basket/>}></Route>
          
        </Routes>
      <Footer />
      </WishlistProvider>
            
      </CartProvider>
    
    </BrowserRouter>
    </main>

  )
}

export default App