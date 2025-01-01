import React from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { removeTodo, Todo } from '../store/slices/todo'

const TodoList: React.FC = () => {
  const todos: Todo[] = useAppSelector((state) => state.todo.todos)
  const dispatch = useAppDispatch()


  return (
    <ul>
      {
       todos.map((todo) => 
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
       ) 
      }
    </ul>
  )
}

export default TodoList 