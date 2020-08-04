import React, {useState} from "react";


export default function AddTodoForm(props) {
    // AddTodoForm.propTypes = {
    //     todos: PropTypes.array.isRequired
    // };

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

