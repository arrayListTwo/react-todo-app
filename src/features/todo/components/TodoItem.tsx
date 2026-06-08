import type { Index } from "../types";

type Props = {
  todo: Index;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

function TodoItem({
                    todo,
                    deleteTodo,
                    toggleTodo
                  }: Props) {
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
