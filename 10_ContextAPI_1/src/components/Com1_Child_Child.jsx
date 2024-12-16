import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/context'

const Com1_Child_Child = () => {
    const { count, setCount } = useContext(CounterContext)

    return (
        <>
            <div>
                Hello I "A" child of "X" and value of count is : {count}
            </div>
            <button onClick={() => { setCount(count + 1) }}>Increment Value</button>
        </>
    )
}

export default Com1_Child_Child
