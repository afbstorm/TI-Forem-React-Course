import { useState } from "react";
import PropTypes from 'prop-types';

const initialCount = 0;

const Compteur = (props) => {
    const { incr } = props;

    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => {
        console.log(`Increment avant modification ${count}`);
        setCount(count => count + incr); // <- Asynchrone
        console.log(`Increment après modification ${count}`);
    };

    const handleReset = () => {
        setCount(initialCount);
    }

    return (
        <>
            <p>Valeur : {count}</p>
            <button onClick={handleIncrement}>+ {incr}</button>
            <br />
            {/* <button onClick={handleReset} style={count === initialCount ? {display: 'none'} : {display: 'block'}}>Reset</button> */}
            
            {count !== initialCount ? (
                <button onClick={handleReset}>Reset</button>
            ): null}

            {/* {count !== initialCount && (
                <button onClick={handleReset}>Reset</button>
            )} */}
        </>

    )
}

Compteur.defaultProps = {
    incr: 1
}

Compteur.propTypes = {
    incr: PropTypes.number
}

export default Compteur;