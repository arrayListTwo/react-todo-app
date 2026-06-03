import TodoItem from './TodoItem'
import type { Todo } from "../types/todo.ts";

type Props = {
  todos: Todo[];
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
