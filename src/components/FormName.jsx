import { forwardRef } from 'react'

const FormName = forwardRef(function ({ onClick }, ref) {
  return (
    <form>
      <label htmlFor='name'>What's your name?</label>
      <input ref={ref} type='text' id='name' name='name'></input>
      <button type='button' onClick={onClick}>
        Ok
      </button>
    </form>
  )
})

export default FormName
