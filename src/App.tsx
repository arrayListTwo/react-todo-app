import TodoInput from "./features/todo/components/TodoInput.tsx";
import TodoList from "./features/todo/components/TodoList.tsx";
import TodoSearch from './features/todo/components/TodoSearch.tsx'
import TodoFilter from './features/todo/components/TodoFilter.tsx'
import { useTodoStore } from './features/todo/store/todoStore.ts'
import { useState } from 'react'
import type { Filter } from './features/todo/types'

function App() {

  const [ keyword, setKeyword ] = useState('')
  const [ filter, setFilter ] = useState<Filter>('all')
  const todos = useTodoStore(state => state.todos)

  // 筛选任务
  const filteredTodos = todos.filter(todo => {
    // 搜索过滤
    const matchesKeyword = todo.text
      .toLowerCase()
      .includes(keyword.toLowerCase())

    // 状态过滤
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'active'
          ? !todo.completed
          : todo.completed

    return (
      matchesKeyword && matchesFilter
    )
  })

  return (
    <div style={ { padding: 40 } }>
      <h1>Todo List</h1>
      <TodoSearch
        keyword={ keyword }
        onKeywordChange={ setKeyword }
      />
      <TodoFilter
        filter={ filter }
        onFilterChange={ setFilter }
      />
      <TodoInput/>
      <TodoList filteredTodos={ filteredTodos }/>
    </div>
  )
}

export default App
