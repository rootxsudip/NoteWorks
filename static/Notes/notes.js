const sidebar = document.querySelector(".sidebar");
const arrow_out = document.querySelector(".arrow-out");
const arrow_in = document.querySelector(".arrow-in");
const addNote = document.querySelector(".addNote");
const textarea = document.querySelector(".user_text");
const save = document.querySelector(".save");
const dropbtn = document.querySelector(".profile");
const dropdown = document.querySelector(".info") 
const closeBtn = document.querySelector(".close-btn");

dropbtn.addEventListener("click", function(){
    dropdown.style.opacity = 1;
})

closeBtn.addEventListener("click", function(){
    dropdown.style.opacity = 0;
})

window.addEventListener("DOMContentLoaded", () => {
arrow_out.addEventListener("click", function(){
    sidebar.style.opacity = 1;
    sidebar.classList.toggle("isHidden");
    arrow_out.style.opacity = 0;
    arrow_in.style.opacity = 1;
})

arrow_in.addEventListener("click", function(){
    sidebar.style.opacity = 0;
    arrow_in.style.opacity = 0;
    arrow_out.style.opacity = 1;
    sidebar.classList.toggle("isHidden2");
})
})

addNote.addEventListener("click", function(){
    textarea.textContent = "Type Here:"
})

addFolder.addEventListener("click", function(){
    sidebar.textContent = "saved"
})

