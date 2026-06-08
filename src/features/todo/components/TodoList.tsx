import TodoItem from './TodoItem.tsx'
import type { Todo } from '../types';

type Props = {
  filteredTodos: Todo[];
};

function TodoList({ filteredTodos }: Props) {

  if(filteredTodos.length === 0) {
    return (
      <div>
        <p>没有找到匹配任务</p>
      </div>
    )
  }

  return (
    <div>
      {
        filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))
      }
      <hr />
      <p>
        共 { filteredTodos.length } 条
      </p>
    </div>
  )
}

export default TodoList;
