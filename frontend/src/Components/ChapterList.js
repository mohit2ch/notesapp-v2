import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useGetChapterQuery } from '../slices/chapterApiSlice';
import { Spinner } from 'react-bootstrap';
export default function ChapterList() {
    const [chapters, setChapters] = useState([]);
    // console.log(params)
    const {chapterId} = useParams();
    const {data, isLoading, error} = useGetChapterQuery(chapterId);
    return (
        <ButtonGroup vertical className='chapterlist'>
            {isLoading? <Spinner/>:
                data.chapters.map((chapter) => (<Link to={`/chapter/${chapter._id}`} style={{width:'100%', marginBottom:'5px'}}><Button style={{width:'100%'}}>{chapter.title}</Button></Link>))
            }
        </ButtonGroup>
      );
    
};
