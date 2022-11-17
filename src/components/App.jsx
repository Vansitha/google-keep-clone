import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, updateList] = useState([]);

  function addNote(noteObject) {
    updateList((prev) => {
      return [noteObject, ...prev];
    });
  }

  function deleteNote(noteID) {
    updateList((prev) => {
      return prev.filter((currNoteObj, currindex) => {
        return currindex !== noteID;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notesList.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            deleteNote={deleteNote}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
