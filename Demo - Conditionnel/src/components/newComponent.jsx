const NewComponent = (props) => {

    const {name, error} = props;

    // Si une erreur existe
    if (error) {
        // On retourne un message d'erreur dans une balise h2
        return (
            <h2>
                // Le message d'erreur est intégré ici
                Attention {error}
            </h2>
        )
    }
// Si aucune erreur n'est présente
    return (
        <h4>
            {/*On affiche le nom dans une balise h4*/}
            {name}
        </h4>
    )
}

export default NewComponent;
