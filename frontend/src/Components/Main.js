import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useGetChapterQuery } from '../slices/chapterApiSlice';
export default function Main(params) {
    const [chapters, setChapters] = useState([]);
    const {chapterId} = useParams();
    const {data, isLoading, error} = useGetChapterQuery(chapterId);
    
    
    return (
        <ButtonGroup vertical className='chapterlist'>
            {
                chapters.map((chapter) => (<Link to={`/chapter/${chapter._id}`}><Button>{chapter.title}</Button></Link>))
            }
        </ButtonGroup>
      );
    
};