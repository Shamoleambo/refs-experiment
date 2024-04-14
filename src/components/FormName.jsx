import { forwardRef } from 'react'
import Button from 'react-bootstrap/Button'

const FormName = forwardRef(function ({ onClick }, ref) {
  return (
    <form>
      <label htmlFor='name'>What's your name?</label>
      <input ref={ref} type='text' id='name' name='name'></input>
      <Button variant='dark' type='button' onClick={onClick}>
        Ok
      </Button>
    </form>
  )
})

export default FormName
