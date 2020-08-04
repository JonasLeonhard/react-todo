import React, {useState} from "react";
import PropTypes from "prop-types";

export default function AddTodoForm(props) {
    AddTodoForm.propTypes = {
        onAddTodoForm: PropTypes.func.isRequired
    };

    const [addTodo, setAddTodo] = useState("");

    function onFormChange(event) {
        setAddTodo(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        props.onAddTodoForm(addTodo)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                   name="title"
                   placeholder="Add a Todo Item ..."
                   value={addTodo}
                   onChange={onFormChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

