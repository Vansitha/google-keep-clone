import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [inputTitle, updateTitle] = useState("");
  const [inputContent, updateContent] = useState("");
  const [isExpanded, setExpanded] = useState(false);

  function getTitle(event) {
    updateTitle(event.target.value);
  }

  function getContent(event) {
    updateContent(event.target.value);
  }

  function sendNoteContent(event) {
    props.addNote({ title: inputTitle, content: inputContent });
    event.preventDefault();
    updateTitle("");
    updateContent("");
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className='create-note'>
        {isExpanded && (
          <input
            onChange={getTitle}
            value={inputTitle}
            name='title'
            placeholder='Title'
          />
        )}
        <textarea
          onClick={expand}
          onChange={getContent}
          name='content'
          value={inputContent}
          placeholder='Take a note...'
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={sendNoteContent}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
