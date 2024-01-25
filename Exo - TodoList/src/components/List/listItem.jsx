import PropTypes from 'prop-types';
import './listItem.css';

const ListItem = (props) => {

    const { task, desc, priority, completed } = props;

    return ( 
        <li className={completed ? 'complete listItems' : 'uncomplete listItems'}>
            <div className='task-prio'>
                <h3>{task}</h3> {priority === 'High' ? <h3 className='high'>({priority})</h3> : null}
            </div>
            <p>{desc}</p>
        </li>
    )
}

ListItem.propTypes = {
    task: PropTypes.string,
    desc: PropTypes.string,
    priority: PropTypes.string,
    completed: PropTypes.bool
}

export default ListItem;