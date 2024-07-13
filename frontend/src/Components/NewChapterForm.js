import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAddChapterMutation } from '../slices/chapterApiSlice';

export default function NewChapterForm() {
  const [chapter, setChapter] = useState("");
  const {chapterId} = useParams();
  const [createChapter, {isLoading: loadingCreate}] = useAddChapterMutation();

  async function submitHandler(){
    console.log(chapter);
    try{
      const res = await createChapter({chapterId, chapter});
      console.log(res);
    } catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Chapter Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={chapter}
          onChange={(e)=>{setChapter(e.target.value)}}
        />
        <Button variant="secondary" id="button-addon2" onClick={submitHandler}>
          +
        </Button>
      </InputGroup>
    </>
  );
}

