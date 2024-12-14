import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if (numAllowed) str += "1234567890"
    if (charAllowed) str += "`~!@#$%^&*_+=-"
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [numAllowed, charAllowed, length, passwordGenerator])

  const passwordRef = useRef(null)

  const copyPasswordClipboard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Password Generator</h1>
      <div className="bg-gray-800 border-2 border-white rounded-md p-6 shadow-lg">
        <div className="flex items-center mb-4">
          <input
            className="rounded-l-md text-black p-3 w-64"
            ref={passwordRef}
            placeholder="Password"
            readOnly
            value={password}
            type="text"
          />
          <button
            onClick={copyPasswordClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-md p-3 font-medium"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <input
              type="range"
              min={6}
              max={18}
              value={length}
              className="w-full"
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="ml-4 font-medium">Length: {length}</span>
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                onChange={() => setNumAllowed(!numAllowed)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <span>Numbers</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed(!charAllowed)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <span>Special Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
