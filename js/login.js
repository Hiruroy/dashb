var accordionItems = document.querySelectorAll(".login_item");

accordionItems.forEach((item) => {
  var title = item.querySelector(".drop_top");
  // var content = item.querySelector(".drop_bottom");

  title.addEventListener("click", () => {
    for (i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i] != item) {
        accordionItems[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
        // downarrow.classList.toggle("rotee");
      }
    }
  });
});

var do1 = document.querySelector(".drop_top1");
var do2 = document.querySelector(".drop_top2");
var do3 = document.querySelector(".drop_top3");
var downarrow1 = document.querySelector(".downarrow1");
var downarrow2 = document.querySelector(".downarrow2");
var downarrow3 = document.querySelector(".downarrow3");

do1.addEventListener("click", () => {
  downarrow1.classList.toggle("rotee");
  downarrow2.classList.remove("rotee");
  downarrow3.classList.remove("rotee");
});
do2.addEventListener("click", () => {
  downarrow1.classList.remove("rotee");
  downarrow2.classList.toggle("rotee");
  downarrow3.classList.remove("rotee");
});
do3.addEventListener("click", () => {
  downarrow1.classList.remove("rotee");
  downarrow2.classList.remove("rotee");
  downarrow3.classList.toggle("rotee");
});
// =====================

var passwordpop = document.querySelector(".passwordpop");

var change_password = document.querySelector(".change_password");
var password_cross = document.querySelector(".password_cross");

passwordpop.addEventListener("click", () => {
  change_password.style.transform = "scale(1)";
  change_password.style.transition =
    ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.add("addd-container");
});

password_cross.addEventListener("click", () => {
  change_password.style.transform = "scale(0)";
  change_password.style.transition = "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.remove("addd-container");
});

// =====================
// =====================
// =====================

var deletaccount = document.querySelector(".deletaccount");

var confarm_delet = document.querySelector(".confarm_delet");
var confarm_cross = document.querySelector(".confarm_cross");

deletaccount.addEventListener("click", () => {
  confarm_delet.style.transform = "scale(1)";
  confarm_delet.style.transition = ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.add("addd-container");
  delet_profile.style.transform = "scale(0)";
  delet_profile.style.transform = ".0s !important";

});

confarm_cross.addEventListener("click", () => {
  confarm_delet.style.transform = "scale(0)";
  confarm_delet.style.transition = "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.remove("addd-container");
});

// =====================
// =====================
// =====================

var newmail = document.querySelector(".newmail");

var update_email = document.querySelector(".update_email");
var update_cross2 = document.querySelector(".update_cross2");

newmail.addEventListener("click", () => {
  update_email.style.transform = "scale(1)";
  update_email.style.transition = ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.add("addd-container");
});

update_cross2.addEventListener("click", () => {
  update_email.style.transform = "scale(0)";
  update_email.style.transition = "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.remove("addd-container");
});

var deletbtn = document.querySelector(".deletbtn");
var cancel = document.querySelector(".cancel_delet");
var delet_profile = document.querySelector(".delet_profile");
var cross2 = document.querySelector(".cross2");

deletbtn.addEventListener("click", () => {
  delet_profile.style.transform = "scale(1)";
  delet_profile.style.transition = ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.add("addd-container");
});

cross2.addEventListener("click", () => {
  delet_profile.style.transform = "scale(0)";
  delet_profile.style.transition = "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.remove("addd-container");
});

cancel.addEventListener("click", () => {
  delet_profile.style.transform = "scale(0)";
  delet_profile.style.transition = "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.remove("addd-container");
});
var body = document.querySelector("body");

var ppenn = document.querySelector(".ppen");
var edit_profile = document.querySelector(".edit_profile");
var cross = document.querySelector(".cross");
var cancel_delet2 = document.querySelector(".cancel_delet2");

ppenn.addEventListener("click", () => {
  edit_profile.style.transform = "scale(1)";
  edit_profile.style.transition = ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.add("addd-container");
});

cross.addEventListener("click", () => {
  edit_profile.style.transform = "scale(0)";
  edit_profile.style.transition = "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.remove("addd-container");
});

cancel_delet2.addEventListener("click", () => {
  edit_profile.style.transform = "scale(0)";
  edit_profile.style.transition = "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
  body.classList.remove("addd-container");
});