import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const url = 'https://api.agify.io/?name=Gavin&country_id=BE'

  const getAge = async () => {
    try {
      const response = await axios.get(url);
      if (response) {
        console.log(response);
        setData(response.data)
      } 
    } catch (error) {
        setError(error)
    }
  }

  useEffect(() => {
    if (count === 5) {
      getAge()
    }
  }, [count])

  return (
    <>
    {data ? (
      <>
        <h1>{data.name}</h1>
        <h4>A pour âge moyen {data.age} en {data.country_id}</h4>
      </>
    )
  :
  <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
  }
      
    </>
  )
}

export default App
