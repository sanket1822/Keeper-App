import React, { useState } from "react";

function CreateArea(props) {

    const[isExpand, SetExpand]= useState(false);


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    SetExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand?
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null

        }
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand? "3": "1"}
        />
        {isExpand? <button onClick={submitNote}>Add</button> : null}
        
      </form>
    </div>
  );
}

export default CreateArea;