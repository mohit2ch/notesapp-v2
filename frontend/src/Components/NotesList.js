import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Spinner} from 'react-bootstrap';
import Note from './Note';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useGetChapterQuery } from '../slices/chapterApiSlice';

export default function NotesList({chapterId}) {
  
  const [notes, setNotes] = useState([]);
  const {data, isLoading, error} = useGetChapterQuery(chapterId);
  // console.log(data)
  

  return (
    <Container fluid>
      <Row>
        {isLoading? <Spinner style={{margin:'auto', marginTop: '20px'}}/>:
          data.notes.map((note) => (<Note note={note}/>))
        }
      </Row>
    </Container>
  );
}
