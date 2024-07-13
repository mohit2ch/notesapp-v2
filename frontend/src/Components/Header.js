import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SideBar from './SideBar';
import NewNoteButton from './NewNoteButton';
import { Link } from 'react-router-dom';

export default function Header({chapterId}) {
  // console.log(chapterId);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid style={{display:'flex', justifyContent:'space-between'}}>
          <Link to={'/'}><Navbar.Brand>NotesApp</Navbar.Brand></Link>
          <Nav >
            <NewNoteButton/>
            <SideBar chapterId={chapterId}/>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

