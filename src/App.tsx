import TodoInput from "./features/todo/components/TodoInput.tsx";
import TodoList from "./features/todo/components/TodoList.tsx";

function App() {

  return (
    <div style={{ padding: 40 }}>
      <h1>Todo List</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default App
