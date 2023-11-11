const sidebar = document.querySelector(".sidebar");
const addNote = document.querySelector(".addNote");
const textarea = document.querySelector(".user_text");
const save = document.querySelector(".save");
const dropbtn = document.querySelector(".profile");
const dropdown = document.querySelector(".info");
const closeBtn = document.querySelector(".close-btn");
let notes = document.querySelector(".notes");
const container = document.querySelector(".container");
const popup = document.querySelector(".popup");
const addTitle = document.querySelector(".addTitle");
const closePopup = document.querySelector(".close-btn2");
let titleInput = document.querySelector("#title");
let del = document.createElement("i");
let textzone = document.createElement("textarea");
let deleteNotes = document.querySelectorAll(".crossNote");

dropbtn.addEventListener("click", function(){
    dropdown.style.display = "flex";
})

closeBtn.addEventListener("click", function(){
    dropdown.style.display = "none";
})

addNote.addEventListener("click", function(){
    popup.style.display = "block";
})

addTitle.addEventListener("click", (e)=>{
    e.preventDefault();
    if(titleInput.value!==""){
    popup.style.display = "none";
    textzone.setAttribute("contenteditable", "true");
    textzone.className = "textzone";
    container.appendChild(textzone);
    let a = document.createElement('a');
    let link = document.createTextNode(`${titleInput.value}`);
    a.appendChild(link);
    a.href = `#${titleInput.value}`;
    del.className = "ri-close-circle-line crossNote";
    notes.appendChild(a).appendChild(del);
    textarea.value = ""
//    if(del.addEventListener("click", removeNote)){
//    function removeNote(e){
//            e.target.parentElement.remove();
//            updateStorage();
//            }
//        }
    }
console.log(titleInput.value)
let noteHeading = titleInput.value
let email = localStorage.getItem('email');
var params = "heading=" + encodeURIComponent(noteHeading) + "&content=" + encodeURIComponent("") + "&email=" + encodeURIComponent(email);
 var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var noteContent = xhr.responseText;
                window.location.href = "/noteworks/notes";
//                showNoteContent(noteId, noteContent);
              }
            };
            xhr.open("POST", "AddNote", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(params);
//window.location.href = "/noteworks/notes";    
});

function updateStorage() {
  localStorage.setItem("textzone", textarea.innerHTML);
}

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
})

notes.addEventListener("click", myFunction);
function myFunction(e) {
		var elems = document.querySelector(".active");
    if(elems !=null) {
      elems.classList.remove("active");
    }
    e.target.className = "active";
	}
 
function showNoteContent(noteId, content) {
            var textarea = document.getElementById("text");
            textarea.value = content;
            textarea.readOnly = false;
            textarea.dataset.noteId = noteId;
 }

// Function to fetch note content by note ID using AJAX
    function fetchNoteContent(noteId) {
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var noteContent = xhr.responseText;
                showNoteContent(noteId, noteContent);
              }
            };
            xhr.open("POST", "FetchNote", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send("id=" + noteId);
        }
    
save.addEventListener("click",()=>{
//    console.log("Save")
    noteId = noteId
    content = textarea.value
    heading = window.location.hash.substring(1)
    email = localStorage.getItem('email');
    params = "noteId=" + encodeURIComponent(noteId) + "&heading=" + encodeURIComponent(heading) + "&content=" + encodeURIComponent(content) + "&email=" + encodeURIComponent(email);
 var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                noteContent = xhr.responseText;
//                window.location.href = "/noteworks/notes";
//                showNoteContent(noteId, noteContent);
              }
            };
            xhr.open("POST", "UpdateNote", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(params);
    
})

//Delete Note
for(let i=0;i<deleteNotes.length;i++){
    deleteNotes[i].addEventListener("click",()=>{
             noteId = noteId
    email = localStorage.getItem('email');
    params = "noteId=" + encodeURIComponent(noteId) + "&email=" + encodeURIComponent(email);
 var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                noteContent = xhr.responseText;
                window.location.href = "/noteworks/notes";
              }
            };
            xhr.open("POST", "DeleteNote", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(params);
    })
}

let noteId=0
function addNoteID(id){
    noteId=id
}