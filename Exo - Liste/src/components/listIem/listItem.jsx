import PropTypes from 'prop-types'

const ListItem = (props) => {
    // On déstructure l'objet 'props' et on récupère les valeurs des propriétés 'name', 'price', 'isPromo' et 'id'
    const { name, price, isPromo, id } = props;

    return (
        <li>
            {/* Dans le premier paragraphe, on affiche le nom et le prix du produit*/}
            {/* Si le produit est en promo ('isPromo' est vrai), on affiche son prix en rouge. Sinon, il est affiché en noir*/}
            <p>{name} : <span style={isPromo ? {color: 'red'} : {color: 'black'}}>{price}</span> €</p>
            <p>{id}</p>
        </li>
    )
}

ListItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    isPromo: PropTypes.bool,
    id: PropTypes.string
}

export default ListItem;
