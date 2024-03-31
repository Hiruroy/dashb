
     $(".ddllht-selectt").each(function () {
       $(this).hide();
       var $select = $(this);
       var _id = $(this).attr("id");
       var wrapper = document.createElement("div");
       wrapper.setAttribute("class", "ddllht ddllht_" + _id);

       var input = document.createElement("input");
       input.setAttribute("type", "text");
       input.setAttribute("class", "ddllht-input");
       input.setAttribute("id", "ddllht_" + _id);
       input.setAttribute("readonly", "readonly");
       input.setAttribute(
         "placeholder",
         $(this)[0].options[$(this)[0].selectedIndex].innerText
       );

       $(this).before(wrapper);
       var $ddllht = $(".ddllht_" + _id);
       $ddllht.append(input);
       $ddllht.append(
         "<div class='ddllht-options ddllht-options-" + _id + "'></div>"
       );
       var $ddllht_input = $("#ddllht_" + _id);
       var $ops_list = $(".ddllht-options-" + _id);
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

       $ddllht_input.click(function () {
         $ddllht.toggleClass("active");
       });
       $ddllht_input.blur(function () {
         $ddllht.removeClass("active");
       });

       $ops_list.find("div").click(function () {
         // Remove highlighting from previously selected item
         $ops_list.find(".highlighted").removeClass("highlighted");
         // Add highlighting to the currently selected item
         $(this).addClass("highlighted");

         $select.val($(this).data("value")).trigger("change");
         $ddllht_input.val($(this).text());
         $ddllht.removeClass("active");
       });

       // Highlight the initially selected item
       $ops_list
         .find("div")
         .eq($select.prop("selectedIndex"))
         .addClass("highlighted");
     });

// $$$$$$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$
let toggle = document.querySelector(".toggel");
let aside = document.querySelector("aside");
let black_screen = document.querySelector(".black_screen");
let bodyy = document.querySelector("body");

toggle.addEventListener("click", () => {
  aside.classList.toggle("slidemenu");
  black_screen.classList.toggle("bactive");
  bodyy.classList.toggle("addd-container");
});


//  =====================
//  =====================
//  =====================

//  =====================
//  =====================
//  =====================

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".navn",
    prevEl: ".navp",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      // spaceBetween: 10,
    },
  },
});
// ===========
// ===========
// ===========

var swiper = new Swiper(".mySwiper2", {
 

  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ===========
// ===========
// ===========
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  // spaceBetween: 16,
  // autoplay: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".navn3",
    prevEl: ".navp3",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ===================
// ===================
// ===================
// =======bar chart============
// =======bar chart============
// =======bar chart============
// =======bar chart============
// ===================
var options = {
  series: [
    {
      name: "Sale",
      data: [25, 25, 43, 12, 38, 50, 12, 22, 12, 43, 65, 24],
    },
    {
      name: "Rent",
      data: [57, 57, 28, 22, 32, 38, 32, 55, 57, 43, 65, 24],
    },
  ],

  chart: {
    type: "bar",
    height: 270,

    foreColor: "#757575",
  },
  legend: {
    // show: true,
    // showForSingleSeries: true,
    position: "top",
    horizontalAlign: "right",

    markers: {
      width: 14,
      height: 14,

      radius: 50,

      onClick: undefined,
      offsetX: -5,
      offsetY: 3,
    },
  },

  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: "40%",
      // horizontal: false,
      // borderRadius: 0,
      borderRadiusApplication: "end",
      // borderRadiusWhenStacked: "all",

      distributed: false,
      rangeBarOverlap: true,
      rangeBarGroupRows: false,
      hideZeroBarsWhenGrouped: false,
      isDumbbell: true,
      dumbbellColors: undefined,
      isFunnel: false,
      isFunnel3d: true,
    },
  },

  annotations: {
    xaxis: [
      {
        x: 0,
        x2: null,
        strokeDashArray: 0,
        borderColor: "#DEDEDE",
        // fillColor: "#c2c2c2",
        opacity: 1,
        offsetX: 0,
        offsetY: 0,
      },
    ],
  },
  colors: ["#080E63", "#3386FF"],

  grid: {
    show: true,
    borderColor: "#DEDEDE",
    strokeDashArray: [5],
    position: "back",
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisTicks: {
      show: false,
    },
  },

  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
// ===================
// ===================
// =========line chart==========
// =========line chart==========
// =========line chart==========
// =========line chart==========

var options = {
  series: [
    {
      name: "Desktops",
      data: [5, 25, 15, 52, 10, 40, 29, 38, 23, 55, 6, 55],
    },
  ],
  chart: {
    height: 260,
    type: "line",
    foreColor: "#757575",
    zoom: {
      enabled: false,
    },
  },
  colors: ["#3386FF"],
  grid: {
    show: true,
    borderColor: "#DEDEDE",
    strokeDashArray: [5],
    position: "back",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    // curve: "straight",
    width: 2,
  },
  title: {
    text: "Total views ",
    align: "right",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "12px",
      fontWeight: 500,
      fontFamily: "poppins",
      color: "#757575",
    },
  },
  annotations: {
    xaxis: [
      {
        x: 0,
        x2: null,
        strokeDashArray: 0,
        borderColor: "#DEDEDE",
        // fillColor: "#c2c2c2",
        opacity: 1,
        offsetX: 0,
        offsetY: 0,
      },
    ],
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisTicks: {
      show: false,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#linechart"), options);
chart.render();

// ===================
// ===================
// ===================
     $(".ddllht-selectt").each(function () {
    $(this).hide();
    var $select = $(this);
    var _id = $(this).attr("id");
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "ddllht ddllht_" + _id);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "ddllht-input");
    input.setAttribute("id", "ddllht_" + _id);
    input.setAttribute("readonly", "readonly");
    input.setAttribute(
        "placeholder",
        $(this)[0].options[$(this)[0].selectedIndex].innerText
    );

    $(this).before(wrapper);
    var $ddllht = $(".ddllht_" + _id);
    $ddllht.append(input);
    $ddllht.append(
        "<div class='ddllht-options ddllht-options-" + _id + "'></div>"
    );
    var $ddllht_input = $("#ddllht_" + _id);
    var $ops_list = $(".ddllht-options-" + _id);
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

    $ddllht_input.click(function () {
        $ddllht.toggleClass("active");
    });
    $ddllht_input.blur(function () {
        $ddllht.removeClass("active");
    });

    $ops_list.find("div").click(function () {
        // Remove highlighting from previously selected item
        $ops_list.find(".highlighted").removeClass("highlighted");
        // Add highlighting to the currently selected item
        $(this).addClass("highlighted");

        $select.val($(this).data("value")).trigger("change");
        $ddllht_input.val($(this).text());
        $ddllht.removeClass("active");
    });

    // Highlight the initially selected item
    $ops_list.find("div").eq($select.prop('selectedIndex')).addClass("highlighted");
});

// ===================
// ===================


      // ======================
      $(".ddllm1-selectt").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddllm1 ddllm1_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddllm1-input");
        input.setAttribute("id", "ddllm1_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddllm1 = $(".ddllm1_" + _id);
        $ddllm1.append(input);
        $ddllm1.append(
          "<div class='ddllm1-options ddllm1-options-" + _id + "'></div>"
        );
        var $ddllm1_input = $("#ddllm1_" + _id);
        var $ops_list = $(".ddllm1-options-" + _id);
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

        $ddllm1_input.click(function () {
          $ddllm1.toggleClass("active");
        });
        $ddllm1_input.blur(function () {
          $ddllm1.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddllm1_input.val($(this).text());
          $ddllm1.removeClass("active");
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
      // ======================
      $(".ddllm2-selectt").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddllm2 ddllm2_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddllm2-input");
        input.setAttribute("id", "ddllm2_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddllm2 = $(".ddllm2_" + _id);
        $ddllm2.append(input);
        $ddllm2.append(
          "<div class='ddllm2-options ddllm2-options-" + _id + "'></div>"
        );
        var $ddllm2_input = $("#ddllm2_" + _id);
        var $ops_list = $(".ddllm2-options-" + _id);
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

        $ddllm2_input.click(function () {
          $ddllm2.toggleClass("active");
        });
        $ddllm2_input.blur(function () {
          $ddllm2.removeClass("active");
        });
        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddllm2_input.val($(this).text());
          $ddllm2.removeClass("active");
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
           $(".ddllht-selectt").each(function () {
    $(this).hide();
    var $select = $(this);
    var _id = $(this).attr("id");
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "ddllht ddllht_" + _id);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "ddllht-input");
    input.setAttribute("id", "ddllht_" + _id);
    input.setAttribute("readonly", "readonly");
    input.setAttribute(
        "placeholder",
        $(this)[0].options[$(this)[0].selectedIndex].innerText
    );

    $(this).before(wrapper);
    var $ddllht = $(".ddllht_" + _id);
    $ddllht.append(input);
    $ddllht.append(
        "<div class='ddllht-options ddllht-options-" + _id + "'></div>"
    );
    var $ddllht_input = $("#ddllht_" + _id);
    var $ops_list = $(".ddllht-options-" + _id);
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

    $ddllht_input.click(function () {
        $ddllht.toggleClass("active");
    });
    $ddllht_input.blur(function () {
        $ddllht.removeClass("active");
    });

    $ops_list.find("div").click(function () {
        // Remove highlighting from previously selected item
        $ops_list.find(".highlighted").removeClass("highlighted");
        // Add highlighting to the currently selected item
        $(this).addClass("highlighted");

        $select.val($(this).data("value")).trigger("change");
        $ddllht_input.val($(this).text());
        $ddllht.removeClass("active");
    });

    // Highlight the initially selected item
    $ops_list.find("div").eq($select.prop('selectedIndex')).addClass("highlighted");
});

      // ======================
// ======================
      
      // ======================
      // ======================
      var preloader = document.querySelector(".preloader");
      var refresh = document.querySelector(".refresh");

      window.onload = () => {
        preloader.style.display = "none";
        // console.log("is loading")
      };
      refresh.addEventListener("click", () => {
        window.onload = () => {
          preloader.style.display = "none";
          // console.log("is loading")
        };
      });

      // ======================
      // ======================
 
// ========dorpdown according===========
// ========dorpdown according===========
// ========dorpdown according===========

// =============
// =============
// =============
     $(".ddllht-selectt").each(function () {
    $(this).hide();
    var $select = $(this);
    var _id = $(this).attr("id");
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "ddllht ddllht_" + _id);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "ddllht-input");
    input.setAttribute("id", "ddllht_" + _id);
    input.setAttribute("readonly", "readonly");
    input.setAttribute(
        "placeholder",
        $(this)[0].options[$(this)[0].selectedIndex].innerText
    );

    $(this).before(wrapper);
    var $ddllht = $(".ddllht_" + _id);
    $ddllht.append(input);
    $ddllht.append(
        "<div class='ddllht-options ddllht-options-" + _id + "'></div>"
    );
    var $ddllht_input = $("#ddllht_" + _id);
    var $ops_list = $(".ddllht-options-" + _id);
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

    $ddllht_input.click(function () {
        $ddllht.toggleClass("active");
    });
    $ddllht_input.blur(function () {
        $ddllht.removeClass("active");
    });

    $ops_list.find("div").click(function () {
        // Remove highlighting from previously selected item
        $ops_list.find(".highlighted").removeClass("highlighted");
        // Add highlighting to the currently selected item
        $(this).addClass("highlighted");

        $select.val($(this).data("value")).trigger("change");
        $ddllht_input.val($(this).text());
        $ddllht.removeClass("active");
    });

    // Highlight the initially selected item
    $ops_list.find("div").eq($select.prop('selectedIndex')).addClass("highlighted");
});

// =============

// =====================
// =====================
// =====================

// =====================
// =====================

// =====================
// =====================
     $(".ddllht-selectt").each(function () {
    $(this).hide();
    var $select = $(this);
    var _id = $(this).attr("id");
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "ddllht ddllht_" + _id);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "ddllht-input");
    input.setAttribute("id", "ddllht_" + _id);
    input.setAttribute("readonly", "readonly");
    input.setAttribute(
        "placeholder",
        $(this)[0].options[$(this)[0].selectedIndex].innerText
    );

    $(this).before(wrapper);
    var $ddllht = $(".ddllht_" + _id);
    $ddllht.append(input);
    $ddllht.append(
        "<div class='ddllht-options ddllht-options-" + _id + "'></div>"
    );
    var $ddllht_input = $("#ddllht_" + _id);
    var $ops_list = $(".ddllht-options-" + _id);
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

    $ddllht_input.click(function () {
        $ddllht.toggleClass("active");
    });
    $ddllht_input.blur(function () {
        $ddllht.removeClass("active");
    });

    $ops_list.find("div").click(function () {
        // Remove highlighting from previously selected item
        $ops_list.find(".highlighted").removeClass("highlighted");
        // Add highlighting to the currently selected item
        $(this).addClass("highlighted");

        $select.val($(this).data("value")).trigger("change");
        $ddllht_input.val($(this).text());
        $ddllht.removeClass("active");
    });

    // Highlight the initially selected item
    $ops_list.find("div").eq($select.prop('selectedIndex')).addClass("highlighted");
});


// =====================
// =====================
// =====================
// =====================
// =====================
     $(".ddllht-selectt").each(function () {
    $(this).hide();
    var $select = $(this);
    var _id = $(this).attr("id");
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "ddllht ddllht_" + _id);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "ddllht-input");
    input.setAttribute("id", "ddllht_" + _id);
    input.setAttribute("readonly", "readonly");
    input.setAttribute(
        "placeholder",
        $(this)[0].options[$(this)[0].selectedIndex].innerText
    );

    $(this).before(wrapper);
    var $ddllht = $(".ddllht_" + _id);
    $ddllht.append(input);
    $ddllht.append(
        "<div class='ddllht-options ddllht-options-" + _id + "'></div>"
    );
    var $ddllht_input = $("#ddllht_" + _id);
    var $ops_list = $(".ddllht-options-" + _id);
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

    $ddllht_input.click(function () {
        $ddllht.toggleClass("active");
    });
    $ddllht_input.blur(function () {
        $ddllht.removeClass("active");
    });

    $ops_list.find("div").click(function () {
        // Remove highlighting from previously selected item
        $ops_list.find(".highlighted").removeClass("highlighted");
        // Add highlighting to the currently selected item
        $(this).addClass("highlighted");

        $select.val($(this).data("value")).trigger("change");
        $ddllht_input.val($(this).text());
        $ddllht.removeClass("active");
    });

    // Highlight the initially selected item
    $ops_list.find("div").eq($select.prop('selectedIndex')).addClass("highlighted");
});

