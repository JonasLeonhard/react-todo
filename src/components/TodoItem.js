import React from "react"
import PropTypes from "prop-types";

export default function TodoItem(props) {
    TodoItem.propTypes = {
        todo: PropTypes.object
    }

    function getStyle() {
        return {
            background: 'blue',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    }

    return (
        <div className="todo-item" style={getStyle(props)}>
            <input type="checkbox"
                   onChange={(e) => props.onTodoCheckboxChanged(e, props.todo.id)}
                   defaultChecked={props.todo.completed}/>
            {props.todo.title}
        </div>
    )
}