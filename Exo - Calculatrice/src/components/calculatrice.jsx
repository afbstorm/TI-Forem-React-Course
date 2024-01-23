import {nanoid} from 'nanoid';
import { useState } from 'react';

const Calculatrice = () => {

    const [values, setValues] = useState({
        num1: '',
        num2: ''
    })
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState('');

    const operations = ['+', '-', '*', '/'];

    const handleChangeNum = (e) => {
        const {name, value} = e.target; 

        if (!isNaN(value)) {
            setValues({...values, [name]: value})
        }
    }

    const handleChangeOperation = (e) => {
        setOperation(e.target.value)
    }

    const handleCalculation = (e) => {
        e.preventDefault();
        let res;
        switch (operation) {
            case '+': 
                res = Number(values.num1) + Number(values.num2)
                break;
            case '-': 
                res = Number(values.num1) - Number(values.num2)
                break;
            case '*': 
                res = Number(values.num1) * Number(values.num2)
                break;
            case '/': 
                res = values.num2 === '0' ? 
                        'Erreur: impossible de diviser par zéro.' : 
                        Number(values.num1) / Number(values.num2)
                break;
            default: 
                res = 'Invalid operation'
        }
        setResult(res)
    }


    return (
        <form onSubmit={handleCalculation}>
            <div>
                <label htmlFor="num1">Nombre 1: </label>
                <input 
                    type="text" 
                    name="num1" 
                    id="num1"
                    value={values.num1}
                    onChange={handleChangeNum} />
            </div>
            <div>
                <label htmlFor="operator">Opérateur: </label>
                <select 
                    id="operator"
                    value={operation}
                    onChange={handleChangeOperation}>
                        {/* {operations.map((ope, index) => <option key={index} value={ope}>{ope}</option>)} */}
                        {operations.map((ope) => <option key={nanoid()} value={ope}>{ope}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="num2">Nombre 2: </label>
                <input 
                    type="text" 
                    name="num2" 
                    id="num2"
                    value={values.num2}
                    onChange={handleChangeNum} />
            </div>
            <button 
                disabled={values.num1 === '' || values.num2 === ''}>Calculer</button>
            <div>
            <label htmlFor="result">Résultat: </label>
                <input 
                    type="text" 
                    id="result"
                    value={result}
                    readOnly />
            </div>
        </form>
    )
}

export default Calculatrice;