const NewComponent = (props) => {

    const {name, error} = props;

    if (error) {
        return (
            <h2>
                Attention {error}
            </h2>
        )
    }

    return (
        <h4>
            {name}
        </h4>
    )
}

export default NewComponent;