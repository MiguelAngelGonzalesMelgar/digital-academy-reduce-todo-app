
const Todo = () => {

  return (
    <section>
      <h2>TODO's:</h2>
      <form>
        <label htmlFor="todos">Add new Todo:</label>
        <input 
        type="text" 
        id="todos" 
        name="new-todo"
        onChange={(e) => {console.log(e)}}
        />
      </form>
      <article>
        <h3>Todo list</h3>    
      </article>
    </section>
  )
}

export default Todo;