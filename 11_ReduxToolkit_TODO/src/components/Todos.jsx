import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            {todos.map((todo) => (
                <div className='bg-green-300 px-3 py-2 text-black m-1' key={todo.id}>{todo.text} 
                <button
                className='bg-gray-400 text-black p-3 '
                onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
                </div>))}


        </>
    )


}

export default Todos
