"use strict";

//setting html elements to variables
const submitButton = document.querySelector(".submit_button");
const noteForm = document.querySelector(".input_note");
const ul = document.querySelector(".unordered-list");
const btnRemove = document.querySelector('.remove');
let notesArr = JSON.parse(localStorage.getItem('.unordered-list')) || [];

//function for adding a note
const addNote = function (value, isLocalStorage) {
  if (value !== "") {
    if(!isLocalStorage) {
      notesArr.push(value);
    }
    const note = document.createElement("li");
    note.innerHTML = value;
    ul.append(note);
    noteForm.value = "";
    localStorage.setItem(".unordered-list", JSON.stringify(notesArr));
  }
};

notesArr.forEach(function(note) {
  addNote(note, true);
})

//for submit button functionality
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  addNote(noteForm.value, false);
});

//allows you to click enter instead of submit button
noteForm.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addNote(noteForm.value, false);
  }
});

//use this if you want to remove everything from local storage
const localStorageRemove = function() {
  localStorage.removeItem('.unordered-list');
  location.reload();
}

btnRemove.addEventListener('click', localStorageRemove);