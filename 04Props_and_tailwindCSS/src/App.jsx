import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  let btnText = {
    value:"click me!"
  }
  return (
    <>
      <h1 className='mb-3 text-5xl bg-green-400 text-black rounded-sm'>Tailwind CSS</h1>

      <Card userName="Yogesh Gheu" button={btnText}/>
      <Card userName="Rohan Vikash" />
      {/* <Card/> */}
    </>
  )
}

export default App
