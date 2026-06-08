import { useTodoStore } from '../store/todoStore.ts'
import type { Todo } from "../types";
import { useState } from 'react'

type Props = {
  todo: Todo;
}

function TodoItem({
                    todo
                  }: Props) {

  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const toggleTodo = useTodoStore(state => state.toggleTodo);
  const updateTodo = useTodoStore(state => state.updateTodo);

  const [ editing, setEditing ] = useState(false);
  const [ editText, setEditText ] = useState(todo.text);

  const handleSave = () => {
    const text = editText.trim()
    if (!text) return
    updateTodo(todo.id, text)
    setEditing(false)
  }

  return (
    <div
      style={ {
        display: "flex",
        gap: 10,
        marginTop: 10
      } }
    >
      <input
        type="checkbox"
        checked={ todo.completed }
        onChange={ () => toggleTodo(todo.id) }
      />
      {
        editing ? (
          <input
            value={ editText }
            onChange={ (e) => setEditText(e.target.value) }
            onKeyDown={ (e) => {
              console.log(e.key)
              // enter 保存
              if (e.key === "Enter") {
                handleSave()
              }
              // esc 退出编辑
              if (e.key === "Escape") {
                // 取消编辑
                setEditText(todo.text)
                setEditing(false)
              }
            } }
            onBlur={ handleSave }
          />
        ) : (
          <span
            onDoubleClick={ () => {
              setEditing(true)
            } }
            style={ {
              textDecoration: todo.completed ? "line-through" : "none"
            } }
          >{ todo.text }</span>
        )
      }
      <button onClick={ () => deleteTodo(todo.id) }>删除</button>
    </div>
  )
}

export default TodoItem;
