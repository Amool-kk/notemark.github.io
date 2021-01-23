console.log("Welcome to thsi page of note make");

const noteheading = document.querySelector('.noteheading');
const notetext = document.querySelector('.notetext');
const pastenote = document.querySelector('.btn');

const viewbox = document.querySelector('.viewbox');

showNotes()
pastenote.addEventListener('click', () => {
    const headingValue = noteheading.value.toUpperCase().trim();
    const noteValue = notetext.value.trim();
    // console.log(noteValue === "" && headingValue === "")
    if(noteValue === "" || headingValue === ""){
        console.log("Please write some note than note");
        noteheading.value = "";
        notetext.value = "";
    }else{
        addNote(headingValue, noteValue);
    }
})



// if user adds a note, add it to the local Storage
function addNote(hValue, nValue) {
    // console.log(hValue,nValue)
    let notesObj = []

    const notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
        // console.log(notesObj,notes)
    } else {
        notesObj = JSON.parse(notes);
        // console.log(notesObj, notes);
    }
    const note = {
        heading: hValue,
        note: nValue
    }
    notesObj.push(note)

    // console.log(JSON.stringify(notesObj))
    localStorage.setItem("notes", JSON.stringify(notesObj));

    noteheading.value = "";
    notetext.value = "";

    // console.log(notes)
    showNotes()
}

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    // console.log(notes)
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
        // console.log(notesObj)
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `<div class="view">
                    <div class="heading items">
                        <h5>${element.heading}</h5>
                    </div>
                    <div class="noteshow items">
                        <p>${element.note}<span class="readmore">this one try</p>  
                    </div>
                    <div class="button items">
                        <button id="${index}" onclick = "deleteNote(this.id)" type="button" class="delete btn">Delete Note</button>
                    </div>
                </div>`
    });
    if(notesObj.length != 0){
        viewbox.innerHTML = html;
        
    }else{
        viewbox.innerHTML = `<div class="msg">Nothing to show! Use "Add a Note" section above to add notes.</div>`;
    }
}
showNotes();

// function to delete a note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    // console.log(notes)
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
        // console.log(notesObj)
    }

    // const position = index + 1;
    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes()
    // console.log(notesObj)
}