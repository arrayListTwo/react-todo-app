import TodoInput from "./features/todo/components/TodoInput.tsx";
import TodoList from "./features/todo/components/TodoList.tsx";
import TodoSearch from './features/todo/components/TodoSearch.tsx'
import { useTodoStore } from './features/todo/store/todoStore.ts'
import { useState, useMemo } from 'react'

function App() {

  const [ keyword, setKeyword ] = useState('')
  const todos = useTodoStore(state => state.todos)

  // 筛选任务
  const filteredTodos = useMemo(() => {
    return todos.filter(
      todo => todo.text
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase()
        )
    )
  }, [ todos, keyword ])

  return (
    <div style={ { padding: 40 } }>
      <h1>Todo List</h1>
      <TodoSearch
        keyword={ keyword }
        onKeywordChange={ setKeyword }
      />
      <TodoInput/>
      <TodoList filteredTodos={ filteredTodos }/>
    </div>
  )
}

export default App
