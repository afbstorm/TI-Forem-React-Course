import './App.css'
import {nanoid} from 'nanoid'; // Plus léger
import { v4 as uuidv4 } from 'uuid'; // Plus lourd
import List from './components/list/list';

function App() {

  // Création d'une constante 'products' qui est un tableau d'objets
  const products = [
    {id: uuidv4(), name: 'Nuka-Cola', price: 1.25, isPromo: false},
    {id: nanoid(), name: 'Vinyle', price: 25, isPromo: true},
    {id: nanoid(), name: 'Spray désinfectant', price: 9.89, isPromo: false},
    {id: nanoid(), name: 'Pomme', price: 0.89, isPromo: false},
    {id: nanoid(), name: 'Tortellini', price: 1.49, isPromo: true},
  ]

  return (
      <List listProducts={products} />  // Retourne un composant List avec une prop listProducts qui est le tableau de produits
  )
}

export default App
