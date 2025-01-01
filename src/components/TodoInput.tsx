import {useState} from 'react'
import { useAppDispatch } from '../store/hooks'
import { addTodo } from '../store/slices/todo'

function TodoInput() { 
  const dispatch = useAppDispatch()
  const [todoValue, setTodoValue] = useState('')

  return (
    <header>
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }} placeholder='Enter todo...' />
      <button onClick={() => dispatch(addTodo(todoValue))}>Add</button>
    </header>
  )
}

export default TodoInput