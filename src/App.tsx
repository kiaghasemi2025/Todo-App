import { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

import type { Todo } from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: crypto.randomUUID(), text }])
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== todoId))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  )

}

export default App
