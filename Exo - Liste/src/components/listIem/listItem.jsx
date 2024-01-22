import PropTypes from 'prop-types'

const ListItem = (props) => {

    const { name, price, isPromo, id } = props; 

    return (
        <li>
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