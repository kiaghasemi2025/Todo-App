import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import './App.css'
import type {Todo} from './components/TodoList'

const App = () => {
  const todos:Todo[] = [
    {id:'1' , text:'First-Task'},
    {id:'2' , text:'Second-Task'},
    {id:'3' , text:'Third-Task'},
    {id:'4' , text:'Fourth-Task'},
  ]
  return (
    <div>
      <NewTodo />
      <TodoList items={todos}/>
    </div>
  )

}

export default App
