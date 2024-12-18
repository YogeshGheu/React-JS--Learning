import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <div>
            <form onSubmit={addTodoHandler} action="">
                <input type="text" className='bg-gray-800 py-2 px-3 text-white rounded border border-gray-700' placeholder='Enter a todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    name="" id="" />
                <button type='submit' className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600'>
                    Add Todo
                </button>
            </form>
        </div>
    )

}

export default AddTodo
