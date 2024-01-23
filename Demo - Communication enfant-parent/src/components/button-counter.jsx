import PropTypes from 'prop-types';

const ButtonCounter = (props) => {

    const { step, onCalc } = props;

    return (
        <div>
            <button onClick={() => onCalc(step, '+')}>+ {step}</button>
            <button onClick={() => onCalc(step, '-')}>- {step}</button>
        </div>
    )
}

ButtonCounter.defaultProps = {
    step: 1,
    onCalc: () => {} // No Operation -- Placeholder
}

ButtonCounter.propTypes = {
    step: PropTypes.number,
    onCalc: PropTypes.func
}

export default ButtonCounter;