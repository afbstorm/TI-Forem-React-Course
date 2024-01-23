import { useState } from 'react';
import './App.css'
import { useDayDate } from './hooks/useDayDate';

function App() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState(1);

  const dayDate = useDayDate();

  const handleClickDemo = (e) => {
    e.preventDefault()
    console.log('Fonction effectuée');
    setValue('Hello Forem')
    setValue2(value2 +1)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>

      <p>{value}</p>
      <p>{value2}</p>

      {dayDate}

      <button onClick={handleClickDemo}>Demo click</button>

      <button onClick={() => console.log('Processus simple effectué')}>Demo click 2</button>

      <input type="text" onBlur={() => console.log('Je suis sorti')} />
     </div>
  )
}

export default App
