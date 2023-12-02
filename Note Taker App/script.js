'use strict';

//setting html elements to variables
const submitButton = document.querySelector(".submit_button");
const noteForm = document.querySelector(".input_note");
const notesUI = document.querySelector(".notes_display");


const addNote = function () {
    if (noteForm.value !== "") {
      const note = document.createElement("div");
      note.innerHTML = `&bull;${noteForm.value}`;
      notesUI.append(note);
      noteForm.value = "";
    }
};

//for submit button functionality
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  addNote();
})

//allows you to click enter instead of submit button
noteForm.addEventListener("keydown", function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    addNote();
  }
});
