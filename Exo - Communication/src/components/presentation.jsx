import PropTypes from 'prop-types';
import './presentation.css';

const Presentation = (props) => {

    // Extraction des propriétés 'name' et 'age' des props
    const { name, age } = props;

    // const titleStyle = {
    //     fontSize: '2rem',
    //     fontWeight: 'bold'
    // };

    // const paragraphStyle = {
    //     color: "lightgrey"
    // };

    return (
        // Un fragment React <> et </> est utilisé pour englober les composants
        <>
            {/*Paragraphe affichant un message de bienvenue au nom passé en props*/}
            <p className='title'>Bienvenue {name} sur l&apos;application React</p>
            {/*Paragraphe affichant l'âge de l'utilisateur passé en props*/}
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
