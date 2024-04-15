import { forwardRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormName = forwardRef(function ({ onClick }, ref) {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>What's your name?</Form.Label>
        <Form.Control
          ref={ref}
          type='text'
          placeholder='Enter your name'
        ></Form.Control>
        <Form.Text className='text-muted'>What's up dog?</Form.Text>
      </Form.Group>
      <Button variant='dark' type='button' onClick={onClick}>
        Ok
      </Button>
    </Form>
  )
})

export default FormName
