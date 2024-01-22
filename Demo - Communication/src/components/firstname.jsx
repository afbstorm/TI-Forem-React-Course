import PropTypes from 'prop-types';
import './firstname.css';

const Firstname = (props) => {

    const { firstname, age } = props; // destructuring des props (properties)

    const style = {
        fontWeight: 'bolder',
        fontSize: '1.25rem'
    }

    return (
        <>
            {/* <h1>Hello {props.firstname}</h1> Sans destructuring */}
            <h1 className='title'>Hello {firstname}</h1>
            <p style={style}>{firstname} a {age}</p> 
        </>
    )
}

Firstname.defaultProps = {
    age: 37
}

Firstname.propTypes = {
    firstname: PropTypes.string,
    age: PropTypes.number
}

export default Firstname;