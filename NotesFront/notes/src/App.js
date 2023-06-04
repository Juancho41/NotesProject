import NavbarNotes from './Components/Navbar'
import NotesLayOut from './Components/NotesLayOut';
import CreateNote from './Components/CreateNote';


const inicialNotes = [
  {
      "id": 1,
      "content": "first note",
      "important": true,
      "date": "2023-06-02T15:16:34.738Z",
      "user": {
          "username": "Juan2"
      }
  },
  {
      "id": 2,
      "content": "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
      "important": true,
      "date": "2023-06-02T15:22:31.806Z",
      "user": {
          "username": "Juan2"
      }
  },
  {
      "id": 3,
      "content": "another note2",
      "important": false,
      "date": "2023-06-02T15:25:57.047Z",
      "user": {
          "username": "Juan2"
      }
  }
]

function App() {




  return (
    <>
      <NavbarNotes />
      <CreateNote />
      <NotesLayOut inicialNotes={inicialNotes}/>
    </>
  );
}

export default App;
