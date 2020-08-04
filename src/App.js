import React, {useState} from 'react';
import './App.css';
import TodoGrid from "./components/TodoGrid";

export default function App() {

    const [todos, setTodos] = useState(
        [
            {
                "id": 1,
                "title": "Title of Todo 1",
                "completed": false
            },
            {
                "id": 2,
                "title": "Title of Todo 2",
                "completed": true
            },
            {
                "id": 3,
                "title": "Title of Todo 3",
                "completed": false
            },
        ]
    )

    function onTodoCheckboxChanged(event, id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));

        console.log("On change!", event, id);
    }

    return (
        <div>
            <TodoGrid todos={todos} onTodoCheckboxChanged={onTodoCheckboxChanged}/>
        </div>
    );
}
