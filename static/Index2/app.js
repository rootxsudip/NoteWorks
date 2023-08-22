const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.onclick = () => {
  wrapper.classList.add("active");
};

loginLink.onclick = () => {
  wrapper.classList.remove("active");
};

btnPopup.onclick = () => {
  wrapper.classList.add("active-popup");
};

iconClose.onclick = () => {
  wrapper.classList.remove("active-popup");
};

document.addEventListener("DOMContentLoaded", function () {
  const agreeCheckbox = document.getElementById("agreeCheckbox");
  const termsBox = document.getElementById("termsBox");
  const acceptTerm = document.getElementById("acceptTerm");
  const declineTerm = document.getElementById("declineTerm")
  // agreeCheckbox.addEventListener("change", function () {
  //   showTermsButton.disabled = !agreeCheckbox.checked;
  // });

  agreeCheckbox.addEventListener("click", function () {
    termsBox.classList.remove("hidden");
  });

  acceptTerm.addEventListener("click", function () {
    termsBox.classList.add("hidden");
  });

  declineTerm.addEventListener("click", function () {
    agreeCheckbox.checked = false; // Uncheck the checkbox
    termsBox.classList.add("hidden");
  });


});
