
 
      // question accordion start here
      const accordionItems2 = document.querySelectorAll(".accordionitem");
      accordionItems2.forEach((currentelm) => {
        const title = currentelm.querySelector(".accordion-link");
        title.addEventListener("click", (e) => {
          e.preventDefault();
          for (let i = 0; i < accordionItems2.length; i++) {
            if (accordionItems2[i] != currentelm) {
              accordionItems2[i].classList.remove("accordionactive");
            } else {
              currentelm.classList.toggle("accordionactive");
            }
          }
        });
      });
      // question accordion end here
      // ===================
      // ===================
      var allimage = document.querySelector(".allimg");
      var viewimg = document.querySelector(".viewimg");

      var bluecross = document.querySelector(".bluecross");
      var body = document.querySelector("body");

      allimage.addEventListener("click", () => {
        viewimg.style.transform = "scale(1)";
        // edit_profile1.style.background = "red";

        viewimg.style.transition = ".3s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.add("addd-container");
      });

      bluecross.addEventListener("click", () => {
        viewimg.style.transform = "scale(0)";

        viewimg.style.transition = "0s cubic-bezier(0.39, 0.575, 0.565, 1.5)";
        body.classList.remove("addd-container");
      });

      var swiper = new Swiper(".mySwiperv", {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        autoplay: false,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        // spaceBetween: 10,
        loop: true,
        autoplay: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        thumbs: {
          swiper: swiper,
        },
      });
     
      // ===================
      // ===================
      // ===================
      const accordionButtons = document.querySelectorAll(".accordion");
      const panel = document.querySelector(".panel");

      accordionButtons.forEach((accordion) => {
        accordion.onclick = function () {
          this.classList.toggle("is-open");

          let content = this.nextElementSibling;
          console.log(content);

          if (content.style.maxHeight) {
            //this is if the accordion is open
            content.style.maxHeight = null;
          } else {
            //if the accordion is currently closed
            content.style.maxHeight = content.scrollHeight + "px";
            console.log(content.style.maxHeight);
          }
        };
      });
      // ===================
   