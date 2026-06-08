import { useEffect } from "react";
import TodoInput from "./features/todo/components/TodoInput.tsx";
import TodoList from "./features/todo/components/TodoList.tsx";
import { useTodos } from "./features/todo/hooks/useTodos.ts";
function App() {

  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  // 保存 LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div style={{padding: 40}}>

      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Tailwind OK
        </h1>
      </div>

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
