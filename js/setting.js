 
      var pen2 = document.querySelector(".pen2");
      var edit_profile1 = document.querySelector(".edit_profile1");
      var cancel_delet1 = document.querySelector(".cancel_delet1");
      var cross5 = document.querySelector(".cross5");
      var body = document.querySelector("body");

      pen2.addEventListener("click", () => {
        edit_profile1.style.transform = "scale(1)";
        // edit_profile1.style.background = "red";

        edit_profile1.style.transition =
          ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.add("addd-container");
      });

      cross5.addEventListener("click", () => {
        edit_profile1.style.transform = "scale(0)";

        edit_profile1.style.transition =
          "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.remove("addd-container");
      });
      cancel_delet1.addEventListener("click", () => {
        edit_profile1.style.transform = "scale(0)";

        edit_profile1.style.transition =
          "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.remove("addd-container");
      });

      // ==================

      $(function () {
        $(".ddlx-select").each(function () {
          $(this).hide();
          var $select = $(this);
          var _id = $(this).attr("id");
          var wrapper = document.createElement("div");
          wrapper.setAttribute("class", "ddlx ddlx_" + _id);

          var input = document.createElement("input");
          input.setAttribute("type", "text");
          input.setAttribute("class", "ddlx-input");
          input.setAttribute("id", "ddlx_" + _id);
          input.setAttribute("readonly", "readonly");
          input.setAttribute(
            "placeholder",
            $(this)[0].options[$(this)[0].selectedIndex].innerText
          );

          $(this).before(wrapper);
          var $ddlx = $(".ddlx_" + _id);
          $ddlx.append(input);
          $ddlx.append(
            "<div class='ddlx-options ddlx-options-" + _id + "'></div>"
          );
          var $ddlx_input = $("#ddlx_" + _id);
          var $ops_list = $(".ddlx-options-" + _id);
          var $ops = $(this)[0].options;
          for (var i = 0; i < $ops.length; i++) {
            $ops_list.append(
              "<div data-value='" +
                $ops[i].value +
                "' class='ddlx-option'>" +
                $ops[i].innerText +
                "</div>"
            );
          }

          $ddlx_input.click(function () {
            $ddlx.toggleClass("active");
          });
          $ddlx_input.blur(function () {
            $ddlx.removeClass("active");
          });

          $ops_list.find("div").click(function () {
            // Remove highlight from previously selected item
            $ops_list.find(".highlighted").removeClass("highlighted");
            // Highlight the currently selected item
            $(this).addClass("highlighted");

            $select.val($(this).data("value")).trigger("change");
            $ddlx_input.val($(this).text());
            $ddlx.removeClass("active");
          });

          // Highlight initially selected item
          $ops_list
            .find("div")
            .eq($select.prop("selectedIndex"))
            .addClass("highlighted");
        });
      });

      //   ========================
