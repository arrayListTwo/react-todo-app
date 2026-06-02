import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";
import type { Todo } from "./types/todo.ts";

function App() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        // 初始化读取 LocalStorage
        return JSON.parse(localStorage.getItem("todos") || "[]");
    });

    // // 初始化读取 LocalStorage
    // useEffect(() => {
    //   const savedTodos = localStorage.getItem("todos");
    //   if (savedTodos) {
    //     setTodos(JSON.parse(savedTodos));
    //   }
    // }, []);

    // 保存 LocalStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    // 添加任务
    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([newTodo, ...todos]);
    };

    // 删除任务
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // 切换完成状态
    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
    };

    return (
        <div style={{padding: 40}}>
            <h1>Todo List</h1>

            <TodoInput addTodo={addTodo}/>

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    )
}

export default App
