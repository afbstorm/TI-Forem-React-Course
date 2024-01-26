import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import Home from './components/pages/Home/home';
import Users from './components/pages/Users/users';
import UsersDetails from './components/usersDetails';
import Contacts from './components/pages/Contacts/contacts';
import About from './components/pages/About/about';
import NotFound from './components/pages/NotFound/notFound';
import ProtectedRoutes from './components/routes/protectedRoutes';


function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        {/* Déclaration de la route index de l'app */}
        <Route path='/'  element={<Home />}/>

        {/* Déclaration de la route /users qui va possiblement prendre
        un param :userId pour mener a sa route /users/:userId 
        - par exemple /users/42 */}
        <Route path='/users' element={<Users />}>
          <Route path=':userId' element={<UsersDetails />} />
        </Route>

        {/* Création de routes bateau */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='/contacts' element={<Contacts />} />

        {/* Création d'une route 404 (not found) 
        par exemple /jobs */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
