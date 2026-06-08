import TodoItem from './TodoItem.tsx'
import { useTodoStore } from "../store/todoStore";

function TodoList() {

  const todos = useTodoStore((state) => state.todos);

  return (
    <div>
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))
      }
    </div>
  )
}

export default TodoList;
