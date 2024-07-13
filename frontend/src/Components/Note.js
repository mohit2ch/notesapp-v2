import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
export default function Note({note}) {
  // console.log(note)
  return (
    <Col xs={6} md={4} xl={3} className='my-2'>
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        
        <Card.Text>
          {note.summary}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">Last Updated {note.updatedAt.substr(0, 10)}</Card.Footer>
    </Card>
    </Col>
  );
}
