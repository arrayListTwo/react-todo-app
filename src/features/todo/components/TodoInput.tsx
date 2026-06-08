import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

function TodoInput() {

  const [text, setText] = useState("");

  // 获取添加任务方法
  const addTodo = useTodoStore(state => state.addTodo)

  const handleAdd = () => {
    if (!text.trim()) return
    addTodo(text);
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="请输入任务"
      />
      <button onClick={handleAdd}>添加</button>
    </div>
  )
}

export default TodoInput;
