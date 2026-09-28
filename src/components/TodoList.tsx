import './TodoList.css'
export type Todo = { id: string, text: string }

interface TodoListProps {
    items: Todo[];
    onDeleteTodo: (todoId: string) => void;
}

const TodoList = ({ items, onDeleteTodo }: TodoListProps) => {

    return (
        <ul>
            {items.map(todo => <li key={todo.id}>
                <span>
                    {todo.text}
                </span>
                <button onClick={() => onDeleteTodo(todo.id)}>DELETE</button>
            </li>)}
        </ul>
    )
}

export default TodoList;