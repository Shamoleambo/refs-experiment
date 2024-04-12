import { forwardRef } from 'react'

const Modalzitto = forwardRef(function ({ name }, ref) {
  return (
    <dialog ref={ref}>
      <h2>Hello {name}</h2>
      <p>You've entered the realm of the modal</p>
      <form method='dialog'>
        <button>OK</button>
      </form>
    </dialog>
  )
})

export default Modalzitto
