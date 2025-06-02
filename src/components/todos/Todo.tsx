import { useState } from "react";
import "../../App.css"

interface todoList {
  todo: string;
  id: string;
}

const Todo = () => {
  const [inputValue, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<todoList[]>([]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoList([
      ...todoList, 
      {
        id: crypto.randomUUID(),
        todo: inputValue,
      }
    ])
    setInputText("");

  }

  const handleDelete = (todoId: string) => {
    const updateTodoList = todoList.filter((todo) => {
        return todo.id !== todoId;
    })
    setTodoList(updateTodoList)
  }

  const formIsValid = inputValue.trim() !== "";


  return (
    <section>
      <h2>TODO's sin reduce:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todos">Add new Todo:</label>
        <input 
        type="text" 
        id="todos" 
        name="new-todo"
        placeholder="Do the laundry"
        value={inputValue}
        onChange={handleOnChange}
        />
        <button type="submit"
        disabled={!formIsValid}
        >
          Add Todo
        </button>
      </form>
      <article>
        <h3>Todo list</h3>    
        {todoList.map((todoItem) => {
          return (
          <div key={todoItem.id}>
            <p>{todoItem.todo}</p>
            <button onClick={() => handleDelete(todoItem.id)}>X</button>
          </div>
          )
          })
        }
      </article>
    </section>
  )
}

export default Todo;