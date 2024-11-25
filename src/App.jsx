import { Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Auth from './pages/Auth'
import Footer from './components/Footer'


function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/login' element={<Auth/> } />
        <Route path='/register' element={<Auth insideregister={true} /> } />
        <Route path='/dashboard' element={<Dashboard/> } />
        <Route path='/projects' element={<Projects/> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
