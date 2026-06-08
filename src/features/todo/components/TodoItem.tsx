import { useTodoStore } from '../store/todoStore.ts'
import type { Todo } from "../types";

type Props = {
  todo: Todo;
}

function TodoItem({
                    todo
                  }: Props) {

  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const toggleTodo = useTodoStore(state => state.toggleTodo);


  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginTop: 10
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>删除</button>
    </div>
  )
}

export default TodoItem;
