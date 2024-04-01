import { navBarUserElements } from "/index.js";
const CreateContainer = document.getElementById("createContainer");
const clickOnButton = document.getElementById("confirmInfosButton");
const definedTime = document.getElementById("dateInp");

navBarUserElements(CreateContainer);

clickOnButton.setAttribute("class", "hvr-float-shadow");
const dateToday = new Date();

let month = dateToday.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
} else {
  month = month;
}
const fullDate =
  dateToday.getFullYear() + "-" + month + "-" + dateToday.getDate();
clickOnButton.addEventListener("click", (evt) => {
  const dateDefined = definedTime.value;
});
