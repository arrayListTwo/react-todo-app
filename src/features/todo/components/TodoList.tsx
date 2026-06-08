import TodoItem from './TodoItem.tsx'
import type { Index } from "../types";

type Props = {
  todos: Index[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

function TodoList({
                    todos,
                    deleteTodo,
                    toggleTodo
                  }: Props) {
  return (
    <div>
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      }
    </div>
  )
}

export default TodoList;
