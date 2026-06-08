import { useState } from "react";
import type { Todo } from '../types'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])

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

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  }

}
