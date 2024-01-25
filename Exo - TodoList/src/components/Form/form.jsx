import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Inputs from "../Inputs/inputs";
import Select from "../Inputs/select";
import Textarea from "../Inputs/textarea";
import './form.css';


const Form = (props) => {

    const [values, setValues ] = useState({
        id: nanoid(),
        task: '',
        desc: '',
        priority: '',
        completed: false
    });

    const { setTask } = props;

    const priorities = ['High', 'Normal', 'Low'];

    const handleChanges = (inputName, val) => {
        setValues((prevValues) => ({...prevValues, [inputName]: val}))
    };

    const handleAddTask = (e, values) => {
        e.preventDefault();

        setTask((prevValues) => ([...prevValues, values]));
        setValues({
            id: nanoid(),
            task: '',
            desc: '',
            priority: '',
            completed: false
        })
    };

    return (
        <form onSubmit={(e) => handleAddTask(e, values)} className="form">
            <Inputs 
                type={'text'}
                name={'Task name'}
                setValues={(val) => handleChanges('task', val)}
                value={values.task}
                className={'input-text'}
            />

            <Textarea 
                name={'Task description'}
                value={values.desc}
                setValues={(val) => handleChanges('desc', val)} 
                className={'input-textarea'}
            />

            <Select
                name={'Priority'}
                setValues={(val) => handleChanges('priority', val)}
                options={priorities}
                value={values.priority}
                className={'input-select'} 
            />

            <button className="btn-submit" type="submit">Add task</button>
        </form>
    )
}

Form.propTypes = {
    setTask: PropTypes.func
}

export default Form;