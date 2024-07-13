import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ChapterList from './ChapterList';
import NewChapterForm from './NewChapterForm';

function SideBar({chapterId}) {
  console.log(chapterId)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Chapters
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chapters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <NewChapterForm/>
          <ChapterList id={chapterId}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;