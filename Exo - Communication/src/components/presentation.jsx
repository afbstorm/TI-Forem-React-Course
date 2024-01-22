import PropTypes from 'prop-types';
import './presentation.css';

const Presentation = (props) => {

    const { name, age } = props;

    // const titleStyle = {
    //     fontSize: '2rem',
    //     fontWeight: 'bold'
    // };

    // const paragraphStyle = {
    //     color: "lightgrey"
    // };

    return (
        <>
            <p className='title'>Bienvenue {name} sur l&apos;application React</p>
            <p className='paragraph'>Vous avez {age} ans !</p>
        </>
    )
}

Presentation.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

Presentation.defaultProps = {
    age: 18
}

export default Presentation;