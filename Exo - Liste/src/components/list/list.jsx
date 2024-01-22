import PropTypes from 'prop-types';
import ListItem from '../listIem/listItem';

const List = (props) => {

    const items = props.listProducts.map(item => (
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
