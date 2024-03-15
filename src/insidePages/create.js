import { navBarUserElements } from "/index.js";
const CreateContainer = document.getElementById("createContainer");

const imgProfile = document.getElementById("profileContact");
const inputFile = document.getElementById("imageContact");

navBarUserElements(CreateContainer);

inputFile.addEventListener("change", (evt) => {
  const reader = new FileReader();
  reader.addEventListener("load", (evt) => {
    const localStorageImg = localStorage.setItem(
      "saveImg@ContatoCerto",
      reader.result
    );
    imgProfile.src = localStorage.getItem("saveImg@ContatoCerto");
  });
  reader.readAsDataURL(inputFile.files[0]);
});

// inputFile.addEventListener("change", (evt) => {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     const saveImg = localStorage.setItem("saveImg@ContatoCerto", reader.result);
//     img.src = localStorage.getItem("saveImg@ContatoCerto");
//   });
//   reader.readAsDataURL(inputFile.files[0]);
// });
// const saveImg = localStorage.setItem(
//   "saveImg@ContatoCerto",
//   URL.createObjectURL(inputFile.files[0])
// );
// // img.src = URL.createObjectURL(inputFile.files[0]);
