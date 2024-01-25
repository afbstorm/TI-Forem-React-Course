import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ListItem from './listItem';
import './list.css';

const List = (props) => {

    const { list, setTask } = props;

    const handleCompleteTask = (e, id) => {
        e.preventDefault();
        const updateTaskList = list.map(task => {
            if (task.id === id) {
                return {...task, completed: true};
            }
            return task;
        });
        setTask(updateTaskList);
    }

    const handleDeleteTask = (e, id) => {
        e.preventDefault();
        const updateTaskList = list.filter(task => {
            return task.id !== id;
        })
        setTask(updateTaskList);
    }

    return (
        <ul>
            {list.map((elem) => (
                <div key={nanoid()} className='line-layout'>
                    <ListItem 
                        id={elem.id}
                        task={elem.task}
                        desc={elem.desc}
                        priority={elem.priority}
                        completed={elem.completed}
                    />
                    <div className='btn-layout'>
                        <button 
                        onClick={(e) => handleCompleteTask(e, elem.id)} 
                        disabled={elem.completed ? true : false}>
                            Complete
                        </button>
                        <button onClick={(e) => handleDeleteTask(e, elem.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </ul>
    )
}

List.propTypes = {
    list: PropTypes.array,
    setTask: PropTypes.func
}

export default List;