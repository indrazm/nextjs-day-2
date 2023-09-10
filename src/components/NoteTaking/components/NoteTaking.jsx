"use client";

import React, { useState } from "react";

export const NoteTaking = () => {
  const [notes, setNotes] = useState([]); // Immutable
  const [note, setNote] = useState("");

  const handleChangeNote = (event) => {
    const { value } = event.target;
    setNote(value);
  };

  const handleAddToNotes = (event) => {
    event.preventDefault();
    const notesNew = [...notes];
    notesNew.push(note);
    setNotes(notesNew);
    setNote("");
  };

  return (
    <div>
      <h2>Note Taking</h2>
      <form onSubmit={handleAddToNotes}>
        <input value={note} onChange={handleChangeNote}></input>
        <button>Add</button>
      </form>
      <div>
        <div>Your notes</div>
        <div>
          {notes.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
