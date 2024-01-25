import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './select.css';

const Select = (props) => {

    const { name, setValues, value, className, options } = props;

    const selectedOption = options.find(op => op === value);

    return (
        <div className={className}>
            <label htmlFor={name}>{name}</label>
            <select 
                name={name} 
                value={selectedOption}
                onChange={(e) => setValues(e.target.value)}>
                    <option key={nanoid()} value=''>Select a {name}</option>
                    {options.map(op => (
                        <option key={nanoid()} value={op}>{op}</option>
                    ))}
            </select>
        </div>
    )
}

Select.propTypes = {
    name: PropTypes.string,
    setValues: PropTypes.func,
    value: PropTypes.string,
    options: PropTypes.array,
    className: PropTypes.string
}

export default Select;