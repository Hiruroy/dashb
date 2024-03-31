
      // ======================
      // ======================
      const titleaa = document.querySelectorAll(".ltdots");
      const accordionItemssArraya =
        document.querySelectorAll(".threedotpagelist");

      titleaa.forEach((item, index) => {
        item.addEventListener("click", () => {
          accordionItemssArraya.forEach((accordionItemss, i) => {
            // Close all other threedotpage except the one clicked
            if (index !== i) {
              accordionItemss.classList.remove("qq");
            }
          });

          const accordionItemss = accordionItemssArraya[index];
          accordionItemss.classList.toggle("qq");
        });
      });
      // ======================
      // ======================
      $(".ddlln-selectt").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddlln ddlln_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddlln-input");
        input.setAttribute("id", "ddlln_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddlln = $(".ddlln_" + _id);
        $ddlln.append(input);
        $ddlln.append(
          "<div class='ddlln-options ddlln-options-" + _id + "'></div>"
        );
        var $ddlln_input = $("#ddlln_" + _id);
        var $ops_list = $(".ddlln-options-" + _id);
        var $ops = $(this)[0].options;
        for (var i = 0; i < $ops.length; i++) {
          $ops_list.append(
            "<div data-value='" +
              $ops[i].value +
              "'>" +
              $ops[i].innerText +
              "</div>"
          );
        }

        $ddlln_input.click(function () {
          $ddlln.toggleClass("active");
        });
        $ddlln_input.blur(function () {
          $ddlln.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddlln_input.val($(this).text());
          $ddlln.removeClass("active");
        });

        // Highlight the initially selected item
        $ops_list
          .find("div")
          .eq($select.prop("selectedIndex"))
          .addClass("highlighted");

        // ======================
        // ======================
        // ======================
        // ======================
        $(".ddllo-selectt").each(function () {
          $(this).hide();
          var $select = $(this);
          var _id = $(this).attr("id");
          var wrapper = document.createElement("div");
          wrapper.setAttribute("class", "ddllo ddllo_" + _id);

          var input = document.createElement("input");
          input.setAttribute("type", "text");
          input.setAttribute("class", "ddllo-input");
          input.setAttribute("id", "ddllo_" + _id);
          input.setAttribute("readonly", "readonly");
          input.setAttribute(
            "placeholder",
            $(this)[0].options[$(this)[0].selectedIndex].innerText
          );

          $(this).before(wrapper);
          var $ddllo = $(".ddllo_" + _id);
          $ddllo.append(input);
          $ddllo.append(
            "<div class='ddllo-options ddllo-options-" + _id + "'></div>"
          );
          var $ddllo_input = $("#ddllo_" + _id);
          var $ops_list = $(".ddllo-options-" + _id);
          var $ops = $(this)[0].options;
          for (var i = 0; i < $ops.length; i++) {
            $ops_list.append(
              "<div data-value='" +
                $ops[i].value +
                "'>" +
                $ops[i].innerText +
                "</div>"
            );
          }

          $ddllo_input.click(function () {
            $ddllo.toggleClass("active");
          });
          $ddllo_input.blur(function () {
            $ddllo.removeClass("active");
          });

          $ops_list.find("div").click(function () {
            // Remove highlighting from previously selected item
            $ops_list.find(".highlighted").removeClass("highlighted");
            // Add highlighting to the currently selected item
            $(this).addClass("highlighted");

            $select.val($(this).data("value")).trigger("change");
            $ddllo_input.val($(this).text());
            $ddllo.removeClass("active");
          });

          // Highlight the initially selected item
          $ops_list
            .find("div")
            .eq($select.prop("selectedIndex"))
            .addClass("highlighted");
        });
        // ======================
        // ======================
        // ======================
       
  
$(".ddllr-selectt").each(function () {
    $(this).hide();
    var $select = $(this);
    var _id = $(this).attr("id");
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "ddllr ddllr_" + _id);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "ddllr-input");
    input.setAttribute("id", "ddllr_" + _id);
    input.setAttribute("readonly", "readonly");
    input.setAttribute(
        "placeholder",
        $(this)[0].options[$(this)[0].selectedIndex].innerText
    );

    $(this).before(wrapper);
    var $ddllr = $(".ddllr_" + _id);
    $ddllr.append(input);
    $ddllr.append(
        "<div class='ddllr-options ddllr-options-" + _id + "'></div>"
    );
    var $ddllr_input = $("#ddllr_" + _id);
    var $ops_list = $(".ddllr-options-" + _id);
    var $ops = $(this)[0].options;
    for (var i = 0; i < $ops.length; i++) {
        $ops_list.append(
            "<div data-value='" +
            $ops[i].value +
            "'>" +
            $ops[i].innerText +
            "</div>"
        );
    }

    $ddllr_input.click(function () {
        $ddllr.toggleClass("active");
    });
    $ddllr_input.blur(function () {
        $ddllr.removeClass("active");
    });

    $ops_list.find("div").click(function () {
        // Remove highlighting from previously selected item
        $ops_list.find(".highlighted").removeClass("highlighted");
        // Add highlighting to the currently selected item
        $(this).addClass("highlighted");

        $select.val($(this).data("value")).trigger("change");
        $ddllr_input.val($(this).text());
        $ddllr.removeClass("active");
    });

    // Highlight the initially selected item
    $ops_list.find("div").eq($select.prop('selectedIndex')).addClass("highlighted");
});
        // =====================
        // =====================
        // =====================
        // =====================
        // ======================
        // ======================
      });
  