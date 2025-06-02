import { useMemo, useReducer, useState } from "react";
import "../App.css";

interface todoItem {
  todo: string;
  id: string;
}

interface FormState {
  inputValue: string;
  error: string | null;
}

const initialFormState: FormState = {
  inputValue: "",
  error: null,
}

type FormAction =
| {type: "UPDATE_FIELD"; payload: {value: string}}
| {type: "SET_ERROR"; payload: {message: string | null}}
| {type: "RESET_FORM";}


const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {...state, inputValue: action.payload.value};
    case "SET_ERROR":
      return {...state, error: action.payload.message };
    case "RESET_FORM":
      return initialFormState;
    default:
      throw new Error (`Unhandled action type: ${action}`);
  }
}

const TodoReduce = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState)
  const [todoList, setTodoList] = useState<todoItem[]>([]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch({type: "UPDATE_FIELD", payload: {value: value}})
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formState.inputValue.trim() === "") {
      dispatch({type: "SET_ERROR", payload: {message: "Can't add an empty todo."}})
      return;
    }

    setTodoList([
      ...todoList, 
      {
        id: crypto.randomUUID(),
        todo: formState.inputValue,
      }
    ])
    dispatch({type: "RESET_FORM"});

  }

  const handleDelete = (todoId: string) => {
    const updateTodoList = todoList.filter((todo) => {
        return todo.id !== todoId;
    })
    setTodoList(updateTodoList)
  }

  const handleReset = () => {
    dispatch({type: "RESET_FORM"});
  }

  // const FormIsValid = useMemo(() => {
  //   const isValid = formState.inputValue.trim() !== "";
  //   return isValid;
  // }, [formState.inputValue])

  return (
    <section>
      <h2>TODO's:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todos">Add new Todo:</label>
        <input 
        type="text" 
        id="todos" 
        name="new-todo"
        placeholder="Do the laundry"
        value={formState.inputValue}
        onChange={handleOnChange}
        />


        <button type="submit"
        // disabled={!FormIsValid}
        >
          Add Todo
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
          {formState.error && (
            <p className="error-message">{formState.error}</p>
          )}
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

export default TodoReduce;