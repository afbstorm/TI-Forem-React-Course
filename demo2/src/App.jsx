import './App.css'
import Firstname from './components/firstname'

function App() {

  const user = {
    firstname: 'Aurélien',
    lastname: 'Freyling',
  }
  
  return (
    // Appel du composant enfant et envoi de la property (props) firstname avec sa valeur
    <Firstname firstname={user.firstname} />
  )
}

export default App
