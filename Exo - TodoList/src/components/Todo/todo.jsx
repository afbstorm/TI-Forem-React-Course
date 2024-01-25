import PropTypes from 'prop-types';
import List from '../List/list';
import { useState } from 'react';
import Form from '../Form/form';
import './todo.css';

const Todo = (props) => {

    const [task, setTask] = useState([]);

    const { title } = props;

    return (
        <section className='container'>
            <h2>{title}</h2>

            <section className='form-container'>
                <Form setTask={setTask} />
            </section>

            <section className='list-container'>
                <List list={task} setTask={setTask} />
            </section>
        </section>
    )
}

Todo.propTypes = {
    title: PropTypes.string
}

export default Todo;