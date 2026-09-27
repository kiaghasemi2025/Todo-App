export type Todo = {id:string,text:string}
interface TodoListProps {items:Todo[]}

const TodoList = ({items}:TodoListProps) => {

    return (
        <ul>
            {items.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    )
}

export default TodoList;