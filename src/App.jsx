import './App.css'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './page/Home'
import ProductsDetail from './page/ProductsDetail'
import CartList from './page/CartList'
import NoteFound from './components/NoteFound/NoteFound'
function App() {

  return (
   <div className='overflow-hidden flex flex-col justify-between min-h-[100vh] '>
    <Router>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id'element={<ProductsDetail/>}/>
        <Route path='/cart' element={<CartList/>}/>
        <Route path='*' element={<NoteFound/>}/>
      </Routes>
      <Sidebar/>
    <Footer/>
    </Router>
   </div>
  )
}

export default App
