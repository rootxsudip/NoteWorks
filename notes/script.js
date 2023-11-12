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
const search_bar = document.querySelector(".search-bar");
const submit_search = document.querySelector(".submit_search");
const open_search = document.querySelector(".open_search");
const search_input = document.querySelector(".search_input");

search_bar.addEventListener("click", function () {
  search_bar.classList.add("activeSearchBar");
  open_search.style.display = "none";
  submit_search.style.display = "block";
  open_search.style.display = "none";
  search_input.style.display = "block";
});
document.addEventListener("click", (e) => {
  if (e.target.className === "container" || e.target.className === "header") {
    search_bar.classList.remove("activeSearchBar");
    dropdown.style.display = "none";
    search_bar.style.opacity = 0.9;
    submit_search.style.display = "none";
    open_search.style.display = "block";
    search_input.style.display = "none";
  }
});

dropbtn.addEventListener("click", function () {
  dropdown.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  dropdown.style.display = "none";
});

addNote.addEventListener("click", function () {
  popup.style.display = "block";
});

addTitle.addEventListener("click", () => {
  if (titleInput.value !== "") {
    popup.style.display = "none";
    textzone.setAttribute("contenteditable", "true");
    textzone.className = "textzone";
    container.appendChild(textzone);
    let a = document.createElement("a");
    let link = document.createTextNode(`${titleInput.value}`);
    a.appendChild(link);
    a.href = `notes.html#${titleInput.value}`;
    del.className = "ri-close-circle-line crossNote";
    notes.appendChild(a).appendChild(del);
    if (del.addEventListener("click", removeNote)) {
      function removeNote(e) {
        e.target.parentElement.remove();
        updateStorage();
      }
    }
  }
});

function updateStorage() {
  localStorage.setItem("textzone", textarea.innerHTML);
}

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

notes.addEventListener("click", myFunction);
function myFunction(e) {
  var elems = document.querySelector(".active");
  if (elems != null) {
    elems.classList.remove("active");
  }
  e.target.className = "active";
}
