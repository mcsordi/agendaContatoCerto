const firstLetter = document.getElementById("firstUserLetter");
const loginEmail = document.getElementById("loginEmail");

const exitIcon = document.querySelector(".fa-arrow-right-from-bracket");
const navOptions = [...document.querySelectorAll(".nav")];
const initialScreen = document.querySelector(".initialScreen");

const navBarUserElements = (appendElement) => {
  const onClickExit = async (el) => {
    await el.addEventListener("click", (evt) => {
      window.open("/login.html", "_self");
      sessionStorage.setItem("numberPage@contatoCerto", 0);
    });
  };
  const emailLogin = localStorage.getItem("userEmail@ContatoCerto");
  const backgroundContent = document.createElement("section");
  backgroundContent.setAttribute("class", "userInfo");
  const userInfo = document.createElement("div");
  userInfo.setAttribute("class", "showUserInfo");
  const firstLetterCircle = document.createElement("div");
  firstLetterCircle.setAttribute("class", "letterCircle");
  const firstLetterName = document.createElement("p");
  firstLetterName.innerHTML = `${emailLogin[0].toLocaleUpperCase()}`;
  firstLetterName.id = "firstUserLetter";
  firstLetterCircle.appendChild(firstLetterName);
  const emailUser = document.createElement("h3");
  emailUser.id = "loginEmail";
  emailUser.innerHTML = `${emailLogin}`;
  const exitPageIcon = document.createElement("i");
  exitPageIcon.setAttribute("class", "fa-solid fa-arrow-right-from-bracket");
  userInfo.appendChild(firstLetterCircle);
  userInfo.appendChild(emailUser);
  userInfo.appendChild(exitPageIcon);

  const navPage = document.createElement("div");
  navPage.setAttribute("class", "navigatePage");
  const navHome = document.createElement("div");
  navHome.setAttribute("class", "nav");
  const navCreate = document.createElement("div");
  navCreate.setAttribute("class", "nav");
  const navModify = document.createElement("div");
  navModify.setAttribute("class", "nav");
  const navView = document.createElement("div");
  navView.setAttribute("class", "nav");

  const pHome = document.createElement("p");
  const pCreate = document.createElement("p");
  const pModify = document.createElement("p");
  const pView = document.createElement("p");
  pHome.innerHTML = "Home";
  pCreate.innerHTML = "Create";
  pModify.innerHTML = "Modify";
  pView.innerHTML = "View";
  navHome.appendChild(pHome);
  navCreate.appendChild(pCreate);
  navModify.appendChild(pModify);
  navView.appendChild(pView);
  navPage.appendChild(navHome);
  navPage.appendChild(navCreate);
  navPage.appendChild(navModify);
  navPage.appendChild(navView);

  backgroundContent.appendChild(navPage);
  backgroundContent.appendChild(userInfo);
  appendElement.appendChild(backgroundContent);
  onClickExit(exitPageIcon);
  const allNavs = [...document.querySelectorAll(".nav")];
  const clickPageNumber = sessionStorage.getItem("numberPage@contatoCerto");

  if (clickPageNumber == null) {
    allNavs[0].classList.add("navBlue");
  } else {
    allNavs[clickPageNumber].classList.add("navBlue");
  }

  allNavs.map((el, idx) => {
    // const saveNumberPage =
    //   sessionStorage.getItem("numberPage@contatoCerto", idx) || 0;
    el.addEventListener("click", (evt) => {
      sessionStorage.setItem("numberPage@contatoCerto", idx);
      navOptions.map((element) => {
        element.classList.remove("navBlue");
      });
      if (evt.target.tagName != "P") {
        evt.target.classList.add("navBlue");
      } else {
        evt.target.parentNode.classList.add("navBlue");
      }
      switch (idx) {
        case 0:
          window.open("/src/insidePages/home.html", "_self");
          break;
        case 1:
          window.open("/src/insidePages/create.html", "_self");
          break;
        case 2:
          window.open("/src/insidePages/modify.html", "_self");
          break;
        case 3:
          window.open("/src/insidePages/view.html", "_self");
          break;
      }
    });
  });
};

export { navBarUserElements };
