 
      let x = 0;
      let spann = document.querySelector(".value");
      let increment = document.querySelector(".plus");
      let decrement = document.querySelector(".minus");

      increment.addEventListener("click", function () {
        x++;
        spann.textContent = x;
      });

      decrement.addEventListener("click", function () {
        x--;
        if (x < 0) {
          x = 0;
        }
        spann.textContent = x;
      });

      // ============
      // ============
      var x1 = 0;
      var span1 = document.querySelector(".value1");
      var increment1 = document.querySelector(".plus1");
      var decrement1 = document.querySelector(".minus1");

      increment1.addEventListener("click", function () {
        x1++;
        span1.textContent = x1;
      });

      decrement1.addEventListener("click", function () {
        x1--;

        if (x1 < 0) {
          x1 = 0;
        }
        span1.textContent = x1;
      });
      // ============
      // ============
      // ============
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
      });

      // ============
      // ============
   