
      $(".ddllfn-selectt").each(function () {
        $(this).hide();
        var $select = $(this);
        var _id = $(this).attr("id");
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "ddllfn ddllfn_" + _id);

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "ddllfn-input");
        input.setAttribute("id", "ddllfn_" + _id);
        input.setAttribute("readonly", "readonly");
        input.setAttribute(
          "placeholder",
          $(this)[0].options[$(this)[0].selectedIndex].innerText
        );

        $(this).before(wrapper);
        var $ddllfn = $(".ddllfn_" + _id);
        $ddllfn.append(input);
        $ddllfn.append(
          "<div class='ddllfn-options ddllfn-options-" + _id + "'></div>"
        );
        var $ddllfn_input = $("#ddllfn_" + _id);
        var $ops_list = $(".ddllfn-options-" + _id);
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

        $ddllfn_input.click(function () {
          $ddllfn.toggleClass("active");
        });
        $ddllfn_input.blur(function () {
          $ddllfn.removeClass("active");
        });

        $ops_list.find("div").click(function () {
          // Remove highlighting from previously selected item
          $ops_list.find(".highlighted").removeClass("highlighted");
          // Add highlighting to the currently selected item
          $(this).addClass("highlighted");

          $select.val($(this).data("value")).trigger("change");
          $ddllfn_input.val($(this).text());
          $ddllfn.removeClass("active");
        });

        // Highlight the initially selected item
        $ops_list
          .find("div")
          .eq($select.prop("selectedIndex"))
          .addClass("highlighted");
      });

      // ===========================
      // ===========================
      // ===========================

      // ===========================
      function initializeImageUploader(
        dropzoneId,
        fileInputId,
        imagesContainerId
      ) {
        const dropzone = document.getElementById(dropzoneId);
        const imagesContainer = document.getElementById(imagesContainerId);
        const fileInput = document.getElementById(fileInputId);
        let draggingImage = null;

        dropzone.addEventListener("dragover", (event) => {
          event.preventDefault();
          dropzone.classList.add("dragover");
        });

        dropzone.addEventListener("dragleave", () => {
          dropzone.classList.remove("dragover");
        });

        dropzone.addEventListener("drop", (event) => {
          event.preventDefault();
          dropzone.classList.remove("dragover");

          const files = event.dataTransfer.files;
          const remainingSlots = 9 - imagesContainer.children.length;

          if (files.length > remainingSlots) {
            alert("You can upload a maximum of 8 images.");
            return;
          }

          for (const file of files) {
            if (!file.type.startsWith("image/")) {
              continue; // Skip non-image files
            }

            const reader = new FileReader();
            reader.onload = (e) => {
              const imgWrapper = document.createElement("div");
              imgWrapper.classList.add("image-wrapper");

              const img = new Image();
              img.src = e.target.result;
              img.addEventListener("dragstart", (event) => {
                draggingImage = img;
              });
              img.addEventListener("dragend", () => {
                draggingImage = null;
              });

              const removeIcon = document.createElement("span");
              removeIcon.innerHTML =
                '<img class="delet" src="./dist/img/icon/imgdelet.svg"/>';
              removeIcon.classList.add("remove-icon");
              removeIcon.addEventListener("click", () => {
                imgWrapper.parentNode.removeChild(imgWrapper); // Remove the image wrapper from the DOM
                updateImageNumbers();
              });

              const imageNumber = document.createElement("span");
              imageNumber.classList.add("image-number");
              imageNumber.textContent = imagesContainer.children.length + 1;

              imgWrapper.appendChild(img);
              imgWrapper.appendChild(removeIcon);
              imgWrapper.appendChild(imageNumber);

              // Append the new image wrapper to the container
              imagesContainer.appendChild(imgWrapper);
              updateImageNumbers();
            };
            reader.readAsDataURL(file);
          }
        });

        dropzone.addEventListener("click", () => {
          fileInput.click();
        });

        fileInput.addEventListener("change", (event) => {
          const files = event.target.files;
          const remainingSlots = 9 - imagesContainer.children.length;

          if (files.length > remainingSlots) {
            alert("You can upload a maximum of 8 images.");
            return;
          }

          for (const file of files) {
            if (!file.type.startsWith("image/")) {
              continue; // Skip non-image files
            }

            const reader = new FileReader();
            reader.onload = (e) => {
              const imgWrapper = document.createElement("div");
              imgWrapper.classList.add("image-wrapper");

              const img = new Image();
              img.src = e.target.result;
              img.addEventListener("dragstart", (event) => {
                draggingImage = img;
              });
              img.addEventListener("dragend", () => {
                draggingImage = null;
              });

              const removeIcon = document.createElement("span");
              removeIcon.innerHTML =
                '<img class="delet" src="./dist/img/icon/imgdelet.svg"/>';
              removeIcon.classList.add("remove-icon");
              removeIcon.addEventListener("click", () => {
                imgWrapper.parentNode.removeChild(imgWrapper); // Remove the image wrapper from the DOM
                updateImageNumbers();
              });

              const imageNumber = document.createElement("span");
              imageNumber.classList.add("image-number");
              imageNumber.textContent = imagesContainer.children.length + 1;

              imgWrapper.appendChild(img);
              imgWrapper.appendChild(removeIcon);
              imgWrapper.appendChild(imageNumber);

              // Append the new image wrapper to the container
              imagesContainer.appendChild(imgWrapper);
              updateImageNumbers();
            };
            reader.readAsDataURL(file);
          }
        });

        imagesContainer.addEventListener("dragover", (event) => {
          event.preventDefault();
          if (draggingImage) {
            event.dataTransfer.dropEffect = "move";
          }
        });

        imagesContainer.addEventListener("drop", (event) => {
          event.preventDefault();
          if (draggingImage && draggingImage !== event.target) {
            const draggedIndex = Array.from(imagesContainer.children).indexOf(
              draggingImage.parentElement
            );
            const droppedIndex = Array.from(imagesContainer.children).indexOf(
              event.target.parentElement
            );
            imagesContainer.insertBefore(
              draggingImage.parentElement,
              imagesContainer.children[droppedIndex]
            );

            updateImageNumbers();
          }
        });

        function updateImageNumbers() {
          const imageWrappers =
            imagesContainer.querySelectorAll(".image-wrapper");
          imageWrappers.forEach((wrapper, index) => {
            const imageNumber = wrapper.querySelector(".image-number");
            if (imageNumber) {
              imageNumber.textContent = index + 1;
            }
          });
        }
      }

      initializeImageUploader("dropzone1", "file-input1", "images-container1");
      initializeImageUploader("dropzone2", "file-input2", "images-container2");
      // ===========================
      // ===========================
      // ===========================
    