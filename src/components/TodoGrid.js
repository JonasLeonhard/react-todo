import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


export default function TodoGrid(props) {
    TodoGrid.propTypes = {
        todos: PropTypes.array.isRequired
    }

    return (
        props.todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onTodoCheckboxChanged={props.onTodoCheckboxChanged}/>
            )
        )
    )
}

