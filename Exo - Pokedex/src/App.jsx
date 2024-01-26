import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Details from './components/pages/details';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:name' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
