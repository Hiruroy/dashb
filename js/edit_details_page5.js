var linkcontainer = document.querySelector(".link-container");
let inputLink = document.querySelector(".inputlink");
let addinput = document.querySelector(".addmorelink");

addinput.addEventListener("click", (e) => {
  e.preventDefault();
  linkcontainer.innerHTML += `<div class="link inputlink" style="margin-bottom: 8px;"><input type="text" /><img class="linkimg" src="./dist/img/icon/linkblack.svg" alt="linkblack"/></div>`;
});
