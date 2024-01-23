import { useState } from "react";


const Form = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('X');
    const [condition, setCondition] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { firstname, lastname, gender, condition };
        console.log('Datas: ', data);

        setFirstname('');
        setLastname('');
        setGender('X');
        setCondition(false);
    }

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">Prénom: </label>
                    <input 
                        type="text" 
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastname">Nom de famille: </label>
                    <input 
                        type="text" 
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Sexe: </label>
                    <input 
                        type="radio" 
                        name="gender" 
                        id="radioH" 
                        checked={gender === 'H'}
                        onChange={() => setGender('H')}
                    />
                    <label htmlFor="radioH">H</label>

                    <input 
                        type="radio" 
                        name="gender" 
                        id="radioF" 
                        checked={gender === 'F'}
                        onChange={() => setGender('F')}
                    />
                    <label htmlFor="radioF">F</label>

                    <input 
                        type="radio" 
                        name="gender" 
                        id="radioX" 
                        checked={gender === 'X'}
                        onChange={() => setGender('X')}
                    />
                    <label htmlFor="radioX">X</label>
                </div>
                <div>
                    <label htmlFor="condition">Accepter les conditions</label>
                    <input 
                        type="checkbox" 
                        id="conditions"
                        checked={condition}
                        onChange={(e) => setCondition(e.target.checked)} />
                </div>
                <button type="submit">Envoyer le formulaire</button>
            </form>
    )
}

export default Form;