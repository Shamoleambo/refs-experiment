import { useState, useRef } from 'react'
import FormName from './components/FormName'
import Modalzitto from './components/Modalzitto'

function App() {
  const [name, setName] = useState('<insert name>')
  const nameInput = useRef()

  function handleClick() {
    setName(nameInput.current.value)
  }

  return (
    <>
      <Modalzitto />
      <h1>Hello {name}</h1>
      <FormName ref={nameInput} onClick={handleClick} />
    </>
  )
}

export default App
