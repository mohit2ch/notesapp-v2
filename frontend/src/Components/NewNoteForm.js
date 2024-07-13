import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAddNoteMutation } from '../slices/noteApiSlice';


export default function NewNoteForm({submitListener}) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const {chapterId} = useParams();
  const [createNote, {isLoading: loadingNotes}] = useAddNoteMutation();

  async function submitHandler(e){
    e.preventDefault();
    try{
      await createNote({chapterId, title, summary, body: description});
    } catch(err){
      console.log(err);
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" value={summary} onChange={(e)=>{setSummary(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => {setDescription(e.target.value)}}/>
      </Form.Group>
      <Button onClick={submitHandler}>Submit note</Button>
    </Form>
  );
}

