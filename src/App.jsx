import { useState, useRef } from 'react'
import FormName from './components/FormName'

function App() {
  const [name, setName] = useState('<insert name>')
  const nameInput = useRef()

  function handleClick() {
    setName(nameInput.current.value)
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <FormName ref={nameInput} onClick={handleClick} />
    </>
  )
}

export default App
