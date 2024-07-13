import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewNoteForm from './NewNoteForm';

export default function NewNoteButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} style={{borderRadius:'50%'}} className='mx-4'>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Note Form</Modal.Title>
        </Modal.Header>
        <Modal.Body><NewNoteForm submitListener={handleClose}/></Modal.Body>
        
      </Modal>
    </>
  );
}
