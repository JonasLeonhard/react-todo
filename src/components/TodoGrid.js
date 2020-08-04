import React from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import PropTypes from "prop-types";


export default function TodoGrid(props) {
    TodoGrid.propTypes = {
        todos: PropTypes.array.isRequired
    };

    const todoGridStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '5em',
        width: '100vw',
        height: '100vh'
    };

    return (
        <div style={todoGridStyle}>
            {props.todos.map(todo => (
                    <TodoItem key={todo.id}
                              todo={todo}
                              onTodoCheckboxChanged={props.onTodoCheckboxChanged}
                              onTodoCancelClick={props.onTodoCancelClick}/>
                )
            )}
            <AddTodoForm onAddTodoForm={props.onAddTodoForm}/>
        </div>
    )
}

