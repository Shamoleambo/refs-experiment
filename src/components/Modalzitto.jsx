import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Modalzitto({ name, showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>You are so cool {name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is so cool</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
