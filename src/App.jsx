import { useState, useRef } from 'react'
import PrettiestNav from './components/PrettiestNav'
import FormName from './components/FormName'
import Modalzitto from './components/Modalzitto'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [name, setName] = useState('<insert name>')
  const nameInput = useRef()
  const modal = useRef()

  function handleClick() {
    setName(nameInput.current.value)
    modal.current.showModal()
  }

  return (
    <>
      <PrettiestNav />
      <Modalzitto ref={modal} name={name} />
      <h1>Hello {name}</h1>
      <FormName ref={nameInput} onClick={handleClick} />
    </>
  )
}

export default App
