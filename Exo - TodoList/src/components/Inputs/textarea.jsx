import PropTypes from 'prop-types';
import './textarea.css';

const Textarea = (props) => {

    const { value, name, setValues, className } = props;

    return (
        <div className={className}>
            <label htmlFor={name}>{name}</label>
            <textarea 
                name={name}
                value={value}
                onChange={(e) => setValues(e.target.value)} />
        </div>
    )
}


Textarea.propTypes = {
    name: PropTypes.string,
    setValues: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string
}

export default Textarea;