import './App.css'
import NewComponent from './components/newComponent';

function App() {

  // Cette ligne est commentée et donc, la variable "isVisible" n'est pas initiée.
  // const isVisible = true;

  // Initialisation d'une constante "nicknameExist" avec la valeur 'Yes'.
  const nicknameExist = 'Yes';

  // Initiez une constante "user" avec un objet contenant les propriétés firstname, age et nickname.
  const user = {
    firstname: 'Toto',
    age: 42,
    nickname: 'L\'asticot'
  }

  return (
    <>
      {nicknameExist === 'No' ?
      <>
        {/*Si la constante "nicknameExist" est égale à 'No', cela retournera les éléments suivants.*/}
        <h4>{user.firstname} aka {user.nickname}</h4>
        <p>{user.age}</p>
      </> :
      <>
        {/*// Si la constante "nicknameExist" est différente de 'No', cela retournera les éléments suivants.*/}
        <h4>{user.firstname}</h4>
        <p>{user.age}</p>
      </>
      }

      <NewComponent name={user.firstname} error={'Il y a eu une erreur dans le transfert de données'} />
    </>
  )
}

export default App
