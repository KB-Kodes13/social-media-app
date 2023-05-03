

const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("find");
const noteSubmit = document.getElementById("note-submit");
const notes = document.getElementById("notes");

let notesStorage = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

  noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    notesStorage.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    listBuilder(noteInput.value);
    noteInput.value = "";
  });

  const listBuilder = (text) => {
    const note = document.createElement("li");
    note.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
    notes.appendChild(note);
  };
const getNotes = JSON.parse(localStorage.getItem("notes"));
getNotes.forEach((note) => {
  listBuilder(note);
});
