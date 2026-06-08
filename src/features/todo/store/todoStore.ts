import { create } from 'zustand'
import type { Todo } from '../types/index.ts'

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const useTodoStore =
  create<TodoStore>((set) => ({
    // 存储任务列表
    todos: [],
    // 添加任务
    addTodo: (text) =>
      set((state) => ({
        todos: [
          {
            id: Date.now(),
            text,
            completed: false
          },
          ...state.todos
        ]
      })),
    // 删除任务
    removeTodo: (id) =>
      set((state) => ({
        todos:
          state.todos.filter((todo) => todo.id !== id)
      })),
    // 切换任务完成状态
    toggleTodo: (id) =>
      set((state) => ({
        todos:
          state.todos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
          )
      }))
  }))
