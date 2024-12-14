import React from 'react'
import { useState } from 'react'

function ColorBar() {

    const colors = ["red", "white", "black", "green", "aqua", "orange", "blue", "yellow", "brown", "lavender", "gray", "olive", "pink"]
    const [bgColor, setBgColor] = useState(colors[1])

    const colorChanger = (color) => {
        setBgColor(color)
    }

    return (
        <>
            <div style={{ "backgroundColor": bgColor }} className="w-screen h-screen flex justify-center">
                <div className='bg-white text-black border-2 border-gray-600 rounded-full w-fit place-self-center px-3 py-1 m-0'>
                    {colors.map((color, index) => {
                        return <button style={{ "background-color": color, "color": color == "black" ? "white" : "black" }}
                            onClick={() => colorChanger(color)} className={`m-1 px-2 py-1 rounded-full`} key={index}>{color}</button>
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default ColorBar
