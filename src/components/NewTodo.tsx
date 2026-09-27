import { useRef , type SubmitEvent } from 'react';

const NewTodo = () => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const formSubmitHandler = (event: SubmitEvent) => {
        event.preventDefault()
        const enterdText = textInputRef.current?.value
        console.log(enterdText);
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