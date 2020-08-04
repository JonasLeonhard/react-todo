import React, {useState} from 'react';
import './App.css';
import TodoGrid from "./components/TodoGrid";
import uuid from "uuid";

export default function App() {

    const [todos, setTodos] = useState(
        [
            {
                "id": uuid.v4(),
                "title": "Title of Todo 1",
                "completed": false
            },
            {
                "id": uuid.v4(),
                "title": "Title of Todo 2",
                "completed": true
            },
            {
                "id": uuid.v4(),
                "title": "Title of Todo 3",
                "completed": false
            },
        ]
    );

    function onTodoCheckboxChanged(event, id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));

        console.log("On change!", event, id);
    }

    function onTodoCancelClick(event, id) {
        setTodos(todos.filter(todo => {
            return todo.id !== id;
        }))
    }

    function onAddTodoForm(addTodo) {
        setTodos([...todos, {
            "id": uuid.v4(),
            "title": addTodo,
            "completed": false
        }])
    }

    return (
        <div>
            <TodoGrid todos={todos}
                      onTodoCheckboxChanged={onTodoCheckboxChanged}
                      onTodoCancelClick={onTodoCancelClick}
                      onAddTodoForm={onAddTodoForm}/>
        </div>
    );
}
