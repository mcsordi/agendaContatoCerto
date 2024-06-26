import { loginCadaster } from "./api.js";
const buttonFormLogin = document.querySelector("button");
const eyeIcon = document.querySelector(".fa-eye");
const loginKeyInput = document.getElementById("userPass");

const noLoginMsg = document.getElementById("noLoginMsg");
eyeIcon.addEventListener("click", (evt) => {
  if (loginKeyInput.type == "password") {
    loginKeyInput.setAttribute("type", "text");
  } else {
    loginKeyInput.setAttribute("type", "password");
  }
});
const verifyEmailAndPass = async () => {
  const infoEmail = document.getElementById("userEmail");
  const infoPass = document.getElementById("userPass");
  const fetchEmailPass = await fetch(
    `${loginCadaster}/${infoEmail.value}/${infoPass.value}`,
    { method: "GET", mode: "no-cors" }
  ).then((data) => {
    if (data.status == 200) {
      window.open("./src/insidePages/home.html", "_self");
      noLoginMsg.innerHTML = "";
      localStorage.setItem("userEmail@ContatoCerto", infoEmail.value);
    } else if (data.status == 404) {
      noLoginMsg.innerHTML =
        "Usuário ou Senha não cadastrados no banco de dados";
    } else if (data.status == 501) {
      noLoginMsg.innerHTML = "Email não cadastrado no banco de dados";
    } else if (data.status == 401) {
      noLoginMsg.innerHTML = "Senha não cadastrada no banco de dados";
    }
    noLoginMsg.setAttribute("class", "hvr-buzz-out");
    setTimeout(() => {
      noLoginMsg.classList.remove("hvr-buzz-out");
    }, 400);
  });
};
buttonFormLogin.addEventListener("click", (evt) => {
  evt.preventDefault();
  verifyEmailAndPass();
});
