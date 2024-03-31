
      $(".ddll-selectt").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddll ddll_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddll-input");
        input.setAttribute("id", "ddll_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddll = $(".ddll_" + _id);
        $ddll.append(input);
        $ddll.append(
          "<div class='ddll-options ddll-options-" + _id + "'></div>"
        );
        var $ddll_input = $("#ddll_" + _id);
        var $ops_list = $(".ddll-options-" + _id);
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

        $ddll_input.click(function () {
          $ddll.toggleClass("active");
        });
        $ddll_input.blur(function () {
          $ddll.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddll_input.val($(this).text());
          $ddll.removeClass("active");
        });

        // Highlight the initially selected item
        $ops_list
          .find("div")
          .eq($select.prop("selectedIndex"))
          .addClass("highlighted");

        // =========================
        // =========================
        // =========================
        // =========================
        // =========================
        // =========================
        // =========================
        $(".ddllc-selectt").each(function () {
          $(this).hide();
          var $select = $(this);
          var _id = $(this).attr("id");
          var wrapper = document.createElement("div");
          wrapper.setAttribute("class", "ddllc ddllc_" + _id);

          var input = document.createElement("input");
          input.setAttribute("type", "text");
          input.setAttribute("class", "ddllc-input");
          input.setAttribute("id", "ddllc_" + _id);
          input.setAttribute("readonly", "readonly");
          input.setAttribute(
            "placeholder",
            $(this)[0].options[$(this)[0].selectedIndex].innerText
          );

          $(this).before(wrapper);
          var $ddllc = $(".ddllc_" + _id);
          $ddllc.append(input);
          $ddllc.append(
            "<div class='ddllc-options ddllc-options-" + _id + "'></div>"
          );
          var $ddllc_input = $("#ddllc_" + _id);
          var $ops_list = $(".ddllc-options-" + _id);
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

          $ddllc_input.click(function () {
            $ddllc.toggleClass("active");
          });
          $ddllc_input.blur(function () {
            $ddllc.removeClass("active");
          });

          $ops_list.find("div").click(function () {
            // Remove highlighting from previously selected item
            $ops_list.find(".highlighted").removeClass("highlighted");
            // Add highlighting to the currently selected item
            $(this).addClass("highlighted");

            $select.val($(this).data("value")).trigger("change");
            $ddllc_input.val($(this).text());
            $ddllc.removeClass("active");
          });

          // Highlight the initially selected item
          $ops_list
            .find("div")
            .eq($select.prop("selectedIndex"))
            .addClass("highlighted");
        });

        // =========================
        // =========================
        // =========================
        // =========================
        $(".ddllh-selectt").each(function () {
    $(this).hide();
    var $select = $(this);
    var _id = $(this).attr("id");
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "ddllh ddllh_" + _id);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "ddllh-input");
    input.setAttribute("id", "ddllh_" + _id);
    input.setAttribute("readonly", "readonly");
    input.setAttribute(
        "placeholder",
        $(this)[0].options[$(this)[0].selectedIndex].innerText
    );

    $(this).before(wrapper);
    var $ddllh = $(".ddllh_" + _id);
    $ddllh.append(input);
    $ddllh.append(
        "<div class='ddllh-options ddllh-options-" + _id + "'></div>"
    );
    var $ddllh_input = $("#ddllh_" + _id);
    var $ops_list = $(".ddllh-options-" + _id);
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

    $ddllh_input.click(function () {
        $ddllh.toggleClass("active");
    });
    $ddllh_input.blur(function () {
        $ddllh.removeClass("active");
    });

    $ops_list.find("div").click(function () {
        // Remove highlighting from previously selected item
        $ops_list.find(".highlighted").removeClass("highlighted");
        // Add highlighting to the currently selected item
        $(this).addClass("highlighted");

        $select.val($(this).data("value")).trigger("change");
        $ddllh_input.val($(this).text());
        $ddllh.removeClass("active");
    });

    // Highlight the initially selected item
    $ops_list.find("div").eq($select.prop('selectedIndex')).addClass("highlighted");
});

        // =========================
        // =========================
      });
    