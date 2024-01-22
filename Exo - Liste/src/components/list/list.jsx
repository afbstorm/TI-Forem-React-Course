import PropTypes from 'prop-types';
import ListItem from '../listIem/listItem';

const List = (props) => {

    // Définir une constante 'items' qui mappe (transforme) chaque élément de la liste de produits en un élément de liste.
    const items = props.listProducts.map(item => (
        // 'ListItem' est un composant qui représente un élément individuel dans la liste.
        // 'item.id' est utilisé comme clé pour chaque élément de liste pour aider React à identifier les éléments de la liste.
        // '...item' propage toutes les propriétés de l'objet 'item' en tant que props à 'ListItem'.
        <ListItem key={item.id} {...item}/>
    ))

    return (
        <ul>
            {items}
        </ul>
    )
}

List.propTypes = {
    listProducts: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
}

export default List;
