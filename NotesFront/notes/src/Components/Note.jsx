import Card from 'react-bootstrap/Card';


const Note = ({note}) => {
    return (
        <Card>
            
            <Card.Body>
                <Card.Text>{note.important ? 'Important!': ''}</Card.Text>
                <Card.Title>
                   {note.content}
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Note