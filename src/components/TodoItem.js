import React from "react"
import PropTypes from "prop-types";

export default function TodoItem(props) {
    TodoItem.propTypes = {
        todo: PropTypes.object,
        onTodoCheckboxChanged: PropTypes.func,
        onTodoCancelClick: PropTypes.func
    };

    const todoItemStyle = {
        background: '#230033',
        color: 'white',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        textDecoration: props.todo.completed ? 'line-through' : 'none'
    };

    const cancelButtonStyle = {
        float: 'right'
    };

    return (
        <div className="todo-item" style={todoItemStyle}>
            <input type="checkbox"
                   onChange={(e) => props.onTodoCheckboxChanged(e, props.todo.id)}
                   defaultChecked={props.todo.completed}/>
            {props.todo.title}
            <button onClick={(e) => props.onTodoCancelClick(e, props.todo.id)}
                    style={cancelButtonStyle}>X
            </button>
        </div>
    );
}