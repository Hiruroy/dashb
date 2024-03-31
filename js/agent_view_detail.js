
      var editt = document.querySelector(".editt");
      var editdetail_popup = document.querySelector(".editdetail_popup");
      var cancel_edit = document.querySelector(".cancel_edit");
      var cross3 = document.querySelector(".cross3");
      var body = document.querySelector("body");

      editt.addEventListener("click", () => {
        editdetail_popup.style.transform = "scale(1)";
        // editdetail_popup.style.background = "red";

        editdetail_popup.style.transition =
          ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.add("addd-container");
      });

      cross3.addEventListener("click", () => {
        editdetail_popup.style.transform = "scale(0)";

        editdetail_popup.style.transition =
          "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.remove("addd-container");

      });
      cancel_edit.addEventListener("click", () => {
        editdetail_popup.style.transform = "scale(0)";

        editdetail_popup.style.transition =
          "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.remove("addd-container");

      });
   
    //   ========================
