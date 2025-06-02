import { lazy, Suspense, useState } from 'react'
import './App.css'
const LazyDialog = lazy(() => import ("./components/lazyLoading/MyDialog"))
import Todo from './components/todos/Todo'
import TodoReduce from './components/todos/TodoReduce'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  return (
    <main>
    <h1>Reduce todo app</h1>
    <Todo/>
    <TodoReduce/>
    <button onClick={openDialog}>Open Dialog</button>

    {isOpen && (
      <Suspense
      fallback={<div>Loading my lazy dialog...</div>}
      >
      <LazyDialog
      isOpen={isOpen}
      onClose={closeDialog}
      />
      </Suspense>
    )}
    </main>
  )
}

export default App
