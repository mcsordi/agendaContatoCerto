const buttonFormLogin = document.querySelector("button");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPass = document.getElementById("userPass");
const endpoint = "http://127.0.0.1:3005";
const nameInvalid = document.getElementById("nameInvalid");
const emailInvalid = document.getElementById("emailInvalid");
const iconInvalid = document.querySelectorAll(".validadeKeyContainer p");
const messageInvalidName = document.createElement("p");
messageInvalidName.setAttribute("id", "messageInvalidName");
const messageInvalidEmail = document.createElement("p");
messageInvalidEmail.setAttribute("id", "messageInvalidEmail");
const redParagraph = document.querySelectorAll("p");
const allLabel = [...document.querySelectorAll("label")];

const validateUserInfo = () => {
  if (userName.value.length < 2) {
    allLabel[0].appendChild(messageInvalidName);
    messageInvalidName.innerHTML = "Nome invalido";
    messageInvalidName.style.color = "#e60c0d";
    messageInvalidName.setAttribute("class", "hvr-buzz-out");
  } else {
    messageInvalidName.remove(messageInvalidName);
  }
  if (
    userEmail.value.includes("@") == false ||
    userEmail.value.includes(".") == false
  ) {
    allLabel[1].appendChild(messageInvalidEmail);
    messageInvalidEmail.innerHTML = "Email invalido";
    messageInvalidEmail.style.color = "#e60c0d";
    messageInvalidEmail.setAttribute("class", "hvr-buzz-out");
  } else {
    messageInvalidEmail.innerHTML = "";
    messageInvalidEmail.remove(messageInvalidEmail);
  }
  if (userPass.value.length > 7) {
    iconInvalid[0].style.textDecoration = "line-through";
    iconInvalid[0].style.color = "#284";
  } else {
    iconInvalid[0].style.color = "#e60c0d";
    iconInvalid[0].style.textDecoration = "none";
    iconInvalid[0].setAttribute("class", "hvr-buzz-out");
  }
  if (userPass.value.search(/[-\#\$\.\%\&\*\@\?\!]/) >= 0) {
    iconInvalid[1].style.textDecoration = "line-through";
    iconInvalid[1].style.color = "#284";
  } else {
    iconInvalid[1].style.color = "#e60c0d";
    iconInvalid[1].style.textDecoration = "none";
    iconInvalid[1].setAttribute("class", "hvr-buzz-out");
  }
  if (userPass.value.search(/[A-Z]/) >= 0) {
    iconInvalid[2].style.textDecoration = "line-through";
    iconInvalid[2].style.color = "#284";
  } else {
    iconInvalid[2].style.color = "#e60c0d";
    iconInvalid[2].style.textDecoration = "none";
    iconInvalid[2].setAttribute("class", "hvr-buzz-out");
  }
  setTimeout(() => {
    iconInvalid[0].classList.remove("hvr-buzz-out");
    iconInvalid[1].classList.remove("hvr-buzz-out");
    iconInvalid[2].classList.remove("hvr-buzz-out");
    messageInvalidName.classList.remove("hvr-buzz-out");
    messageInvalidEmail.classList.remove("hvr-buzz-out");
  }, 400);
};
document.querySelector(".fa-eye").addEventListener("click", (evt) => {
  if (document.getElementById("userPass").type == "password") {
    document.getElementById("userPass").setAttribute("type", "text");
  } else {
    document.getElementById("userPass").setAttribute("type", "password");
  }
  document.getElementById("userPass").focus();
});
buttonFormLogin.addEventListener("click", (evt) => {
  evt.preventDefault();
  validateUserInfo();
  postInfoUser();
});
const postInfoUser = async () => {
  const fetchPostInfos = await fetch(endpoint, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      nome: userName.value,
      email: userEmail.value,
      senha: userPass.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
};
