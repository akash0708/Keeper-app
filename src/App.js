import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "../src/notes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-body">
        {notes.map((note) => (
          <Note 
            key={note.key}
            title={note.title} 
            content={note.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
