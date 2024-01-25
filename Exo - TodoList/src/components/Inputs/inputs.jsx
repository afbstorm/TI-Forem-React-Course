import PropTypes from 'prop-types';
import './inputs.css';

const Inputs = (props) => {

    const { name, type, setValues, value, disabled, className } = props;

    return (
        <div className={className}>
            <label htmlFor={name}>{name}</label>
                <input 
                    type={type} 
                    name={name}
                    onChange={(e) => setValues(e.target.value)}
                    value={value} 
                    disabled={disabled}
                />
        </div>
    )
}

Inputs.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    setValues: PropTypes.func,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
}

export default Inputs;