import { useRef, type SubmitEvent } from 'react';
import './NewTodo.css'
type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo = (props: NewTodoProps) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const formSubmitHandler = (event: SubmitEvent) => {
        event.preventDefault()
        const enteredText = textInputRef.current!.value;
        if (!enteredText) return
        props.onAddTodo(enteredText)
        textInputRef.current!.value = ''
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add-Todo</button>
        </form>
    )
}

export default NewTodo;