import React from 'react'
import { useState } from 'react'

function Child({ props, onSelect }) {

    const [fruit, setFruit] = useState("select")
    const handleFruitChange = (e) => {
        setFruit(e.target.value)
        onSelect(e.target.value)
    }
    return (
        <div>
            <select onChange={handleFruitChange} value={fruit} name="fruitName" id="">
                {props.map((fruit, index) => <option key={index}>{fruit}</option> )}
            </select>
        </div>
    )
}

export default Child
