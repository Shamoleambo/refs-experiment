import { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PrettiestNav from './components/PrettiestNav'
import FormName from './components/FormName'
import Modalzitto from './components/Modalzitto'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [name, setName] = useState('<insert name>')
  const [showModal, setShowModal] = useState(false)
  const nameInput = useRef()
  const modal = useRef()

  function handleClick() {
    setName(nameInput.current.value)
    setShowModal(true)
  }

  return (
    <>
      <PrettiestNav />
      <Modalzitto
        name={name}
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
      <Container className='mt-5'>
        <Row>
          <Col>
            <h1>Hello {name}</h1>
          </Col>
        </Row>
        <Row className='mt-5 justify-content-xl-center'>
          <Col xl='5'>
            <FormName ref={nameInput} onClick={handleClick} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
