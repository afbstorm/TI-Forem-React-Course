import './App.css'
import NewComponent from './components/newComponent';

function App() {
  
  // const isVisible = true;
  const nicknameExist = 'Yes';

  const user = {
    firstname: 'Toto',
    age: 42,
    nickname: 'L\'asticot'
  }

  return (
    <>
      {nicknameExist === 'No' ? 
      <>
        <h4>{user.firstname} aka {user.nickname}</h4>
        <p>{user.age}</p>
      </> :
      <>
        <h4>{user.firstname}</h4>
        <p>{user.age}</p>
      </>
      }

      <NewComponent name={user.firstname} error={'Il y a eu une erreur dans le transfert de données'} />
    </>
  )
}

export default App
