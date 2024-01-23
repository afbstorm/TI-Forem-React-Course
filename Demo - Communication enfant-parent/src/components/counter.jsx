import { useState } from "react";
import ButtonCounter from "./button-counter";
import DisplayCounter from "./display-counter";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleCalculation = (step, direction) => {

        if (direction === '+') {
            setCount(count => count + step)
        } else {
            setCount(count => count - step)
        }
    }

    console.log(count);

    return (
        <div style={{display: 'flex', gap: '5rem'}}>
            <DisplayCounter count={count} />

            <ButtonCounter onCalc={handleCalculation} />
            <ButtonCounter onCalc={handleCalculation} step={5} />
        </div>
    )
}

export default Counter;