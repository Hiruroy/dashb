
      $(".ddl-select").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddl ddl_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddl-input");
        input.setAttribute("id", "ddl_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddl = $(".ddl_" + _id);
        $ddl.append(input);
        $ddl.append("<div class='ddl-options ddl-options-" + _id + "'></div>");
        var $ddl_input = $("#ddl_" + _id);
        var $ops_list = $(".ddl-options-" + _id);
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

        $ddl_input.click(function () {
          $ddl.toggleClass("active");
        });
        $ddl_input.blur(function () {
          $ddl.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddl_input.val($(this).text());
          $ddl.removeClass("active");
        });

        // Highlight the initially selected item
        $ops_list
          .find("div")
          .eq($select.prop("selectedIndex"))
          .addClass("highlighted");
      });
      // ============
      // ============
      // ============
      // ============
      // ============
      $(".ddl-selectt").each(function () {
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
        var $ddl = $(".ddll_" + _id);
        $ddl.append(input);
        $ddl.append(
          "<div class='ddll-options ddll-options-" + _id + "'></div>"
        );
        var $ddl_input = $("#ddll_" + _id);
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

        $ddl_input.click(function () {
          $ddl.toggleClass("active");
        });
        $ddl_input.blur(function () {
          $ddl.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddl_input.val($(this).text());
          $ddl.removeClass("active");
        });

        // Highlight the initially selected item
        $ops_list
          .find("div")
          .eq($select.prop("selectedIndex"))
          .addClass("highlighted");
      });

      // ================
      // ================
      // ================
      // ================
      // ================
      $(".ddl-selectttt").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddlll ddlll_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddlll-input");
        input.setAttribute("id", "ddlll_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddl = $(".ddlll_" + _id);
        $ddl.append(input);
        $ddl.append(
          "<div class='ddlll-options ddlll-options-" + _id + "'></div>"
        );
        var $ddl_input = $("#ddlll_" + _id);
        var $ops_list = $(".ddlll-options-" + _id);
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

        $ddl_input.click(function () {
          $ddl.toggleClass("active");
        });
        $ddl_input.blur(function () {
          $ddl.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddl_input.val($(this).text());
          $ddl.removeClass("active");
        });

        // Highlight the initially selected item
        $ops_list
          .find("div")
          .eq($select.prop("selectedIndex"))
          .addClass("highlighted");
      });

      // ========================
      // ========================
      // ========================
      // ========================
      // ========================
      $(".ddl-selecttt").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddllll ddllll_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddllll-input");
        input.setAttribute("id", "ddllll_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddl = $(".ddllll_" + _id);
        $ddl.append(input);
        $ddl.append(
          "<div class='ddllll-options ddllll-options-" + _id + "'></div>"
        );
        var $ddl_input = $("#ddllll_" + _id);
        var $ops_list = $(".ddllll-options-" + _id);
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

        $ddl_input.click(function () {
          $ddl.toggleClass("active");
        });
        $ddl_input.blur(function () {
          $ddl.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddl_input.val($(this).text());
          $ddl.removeClass("active");
        });

        // Highlight the initially selected item
        $ops_list
          .find("div")
          .eq($select.prop("selectedIndex"))
          .addClass("highlighted");
      });

      // =======================
      // =======================
      // =======================
      // =======================
      // =======================
      // =======================
      // =======================
      $(".ddl-selecttttt").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddlllll ddlllll_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddlllll-input");
        input.setAttribute("id", "ddlllll_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddl = $(".ddlllll_" + _id);
        $ddl.append(input);
        $ddl.append(
          "<div class='ddlllll-options ddlllll-options-" + _id + "'></div>"
        );
        var $ddl_input = $("#ddlllll_" + _id);
        var $ops_list = $(".ddlllll-options-" + _id);
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

        $ddl_input.click(function () {
          $ddl.toggleClass("active");
        });
        $ddl_input.blur(function () {
          $ddl.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddl_input.val($(this).text());
          $ddl.removeClass("active");
        });

        // Highlight the initially selected item
        $ops_list
          .find("div")
          .eq($select.prop("selectedIndex"))
          .addClass("highlighted");
      });

      // =======================
      // =======================
      // =======================
      // =======================
      $(".ddl-selectttttt").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddllllll ddllllll_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddllllll-input");
        input.setAttribute("id", "ddllllll_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddl = $(".ddllllll_" + _id);
        $ddl.append(input);
        $ddl.append(
          "<div class='ddllllll-options ddllllll-options-" + _id + "'></div>"
        );
        var $ddl_input = $("#ddllllll_" + _id);
        var $ops_list = $(".ddllllll-options-" + _id);
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

        $ddl_input.click(function () {
          $ddl.toggleClass("active");
        });
        $ddl_input.blur(function () {
          $ddl.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddl_input.val($(this).text());
          $ddl.removeClass("active");
        });

        // Highlight the initially selected item
        $ops_list
          .find("div")
          .eq($select.prop("selectedIndex"))
          .addClass("highlighted");
      });

      // =======================
      // =======================
 