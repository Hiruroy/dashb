
      // =======================
      // =======================
      var edit_agentpopup = document.querySelectorAll(".edit_agentpopup");

      var editdetail_popup2 = document.querySelector(".editdetail_popup2");
      var cancel_edit = document.querySelector(".cancel_edita");

      edit_agentpopup.forEach((removepopa) => {
        removepopa.addEventListener("click", () => {
          editdetail_popup2.style.transform = "scale(1)";
          editdetail_popup2.style.transition =
            ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
          body.classList.add("addd-container");
        });
      });

      cancel_edit.addEventListener("click", () => {
        editdetail_popup2.style.transform = "scale(0)";
        editdetail_popup2.style.transition = "0s ";
        body.classList.remove("addd-container");
      });

      // =====================
      // =====================

      var remove_agentpopup = document.querySelectorAll(".remove_agentpopup");

      var delet_agent = document.querySelector(".delet_agent");
      var cancel_delett = document.querySelector(".cancel_delett");

      remove_agentpopup.forEach((removepop) => {
        removepop.addEventListener("click", () => {
          delet_agent.style.transform = "scale(1)";
          delet_agent.style.transition =
            ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
          body.classList.add("addd-container");
        });
      });

      cancel_delett.addEventListener("click", () => {
        delet_agent.style.transform = "scale(0)";
        delet_agent.style.transition =
          "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.add("addd-container");
      });

      // =====================
      // =====================
      // =======================
      // =====================
      // =====================

      var deletaccount = document.querySelector(".deletaccount");

      var delet_confaem = document.querySelector(".delet_confaem");
      var cancel_delettt = document.querySelector(".cancel_delettt");

      deletaccount.addEventListener("click", () => {
        delet_confaem.style.transform = "scale(1)";
        delet_confaem.style.transition =
          ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.add("addd-container");
        delet_agent.style.transform = "scale(0)";
        delet_agent.style.transition =
          "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
      });

      cancel_delettt.addEventListener("click", () => {
        delet_confaem.style.transform = "scale(0)";
        delet_confaem.style.transition =
          "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.add("addd-container");
      });

      // =====================
      // =====================
      // =======================
      // =======================
      // =======================
      // =======================
      const titlea = document.querySelectorAll(".tdots");
      const accordionItemssArray = document.querySelectorAll(".threedotpage");

      titlea.forEach((item, index) => {
        item.addEventListener("click", () => {
          accordionItemssArray.forEach((accordionItemss, i) => {
            // Close all other threedotpage except the one clicked
            if (index !== i) {
              accordionItemss.classList.remove("q");
            }
          });

          const accordionItemss = accordionItemssArray[index];
          accordionItemss.classList.toggle("q");
        });
      });
      // =======================
      // =======================
      //   ========================
      var addnew = document.querySelector(".addnew");
      var addnew_popup = document.querySelector(".addnew_popup");
      var cancel_edittt = document.querySelector(".cancel_edittt");
      var cross4 = document.querySelector(".cross4");
      var body = document.querySelector("body");

      addnew.addEventListener("click", () => {
        addnew_popup.style.transform = "scale(1)";
        // editdetail_popup.style.background = "red";

        addnew_popup.style.transition =
          ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.add("addd-container");
      });

      cross4.addEventListener("click", () => {
        addnew_popup.style.transform = "scale(0)";

        addnew_popup.style.transition =
          "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.remove("addd-container");
      });
      cancel_edittt.addEventListener("click", () => {
        addnew_popup.style.transform = "scale(0)";

        addnew_popup.style.transition =
          "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.remove("addd-container");
      });
      //   ========================

      // question accordion start here

      // question accordion end here
