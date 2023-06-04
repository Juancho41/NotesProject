import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container'
import Note from './Note'

function NotesLayOut({inicialNotes}) {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4 m-1">
                {inicialNotes.map(note => (
                    <Col key={note.id}>
                        <Note note={note}/>
                        
                    </Col>
                ))}
            </Row>

        </Container>

    );
}

export default NotesLayOut;