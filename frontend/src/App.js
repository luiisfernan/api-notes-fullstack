import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css"

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [listNote, setListNotes] = useState([]);

  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/api/notes").then((response) => {
      setListNotes(response.data);
    });
  }, []);

  const getNote = () => {
    axios.post("http://localhost:3001/api/notes", {
      name: name,
      description: description,
    });
  };

  const updateNote = (id) => {
    axios.put(`http://localhost:3001/api/notes/${id}`, {
    id: id,  
    name: newName,
      description: newDescription,
    });
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:3001/api/notes/${id}`)
  }

  return (
    <div className="App">
      <div className="viewNote">
      <h1>Notes for Tasks</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name Note"
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description Note"
      />
      <input type="submit" value="Create Note" onClick={getNote} />

      <h2 className="view">Views Notes</h2>
      </div>

      {listNote.map((val, key) => {
        return (
          <div key={key} className="NotesServer">
            <h2><span>Name Note</span> {val.name}</h2>
            <h2><span>Description Note</span> {val.description}</h2>
            <input
              type="text"
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Name Note Update"
            />
            <input
              type="text"
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Description Note Update"
            />
            <input type="submit" value="Update" onClick={() => updateNote(val._id)} />
            <input type="submit" value="Delete" onClick={(_id) => deleteNote(val._id)} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
