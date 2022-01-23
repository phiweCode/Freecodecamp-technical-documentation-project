let navHeaders = Array.from(document.querySelectorAll(".header-radio"));

let iFrame = document.querySelector("#iframe");

let checkMark = Array.from(document.querySelectorAll(".checkmark"));

let lists = Array.from(document.querySelectorAll(".dropdowns"));

let navLinks = Array.from(document.querySelectorAll('[name="nav-links"]'));

let inputSearch = document.querySelector(".search-div");

let inputNav = document.querySelectorAll('[name="main_nav"]');

let inputNavArr = Array.from(inputNav);

let viewport = window.matchMedia("(max-width: 1115px)");

let searchInput = document.querySelector("#search-textarea");

let stylesInput1 = {
  width: "100%",
  height: "100%",
  overflow: "auto",
};

lists.forEach((item, ind, arr) =>
  Object.assign(item.style, {
    height: "0",
    width: "0",
    overflow: "hidden",
  })
);

const onLoad = () => {
  navHeaders[0].checked = true;
  lists[0].checked = true;
};

navLinks.map((item, i, arr) => {
  item.addEventListener("click", () => {
    if (item.checked === true) {
      item.parentElement.style.fontWeight = "700";
      arr.map((sibs) => {
        if (sibs != item) {
          sibs.parentElement.style.fontWeight = "400";
        }
      });

      switch (i) {
        case 0:
          iFrame.setAttribute("src", "./index2.html");
          break;
        case 1:
          iFrame.setAttribute("src", "./index3.html");
          break;
        case 2:
          iFrame.setAttribute("src", "./index4.html");
          break;
        case 3:
          iFrame.setAttribute("src", "./index5.html");
          break;
        case 4:
          iFrame.setAttribute("src", "./index6.html");
          break;
      }
    }
  });
});

/* The focus and blur functions are for the state of the input field that 
responds by a background change when a user provides input to the input field. 
*/

const onfocusFunction = () => {
  inputSearch.style.backgroundColor = "#99999952";
};

const onblurFunction = () => {
  inputSearch.style.backgroundColor = "transparent";
};

// this is the end of the text input field functionality

const navReloader = (char) => {
  $(".header-radio").each(function () {
    if (!$(this).prop(":checked"))
      $(".dropdowns")
        .eq($(".header-radio").index($(this)))
        .css({
          width: "0",
          height: "0",
          overflow: "hidden",
        });
  });
};

navHeaders.map((each, ind, arr) => {
  each.addEventListener("click", () => {
    if (each.checked === true) {
      Object.assign(lists[ind].style, stylesInput1);

      each.parentElement.style.color = "#000";

      arr.forEach((item, index) => {
        if (item != each) {
          item.parentElement.style.color = "#6d6d6d";
          Object.assign(lists[index].style, {
            height: "0",
            width: "0",
            overflow: "hidden",
          });
        }
      });
    }
  });
});

$(function () {
  $(".header-radio").click(function () {
    var $radio = $(this);

    // if this was previously checked

    if ($radio.data("waschecked") == true) {
      $radio.prop("checked", false);
      $radio.data("waschecked", false);

      navReloader();

      $(".nav-header-label").css({
        color: "#6d6d6d",
      });
    } else {
      $radio.data("waschecked", true);
    }
    // remove was checked from other radios

    $radio.siblings(".header-radio").data("waschecked", false);
  });
});

$(function () {
  $(".main_header_radio").click(function () {
    var $radio = $(this);
    var $link = $(".nav_li").eq($(".main_header_radio").index($radio));

    $(".nav_li").css({
      "border-bottom": "none",
      color: "#ffffff",
    });

    if ($radio.prop("checked")) {
      $link.css({
        "border-bottom": "4px solid #61dafb ",
        color: "#61dafb",
      });
    }
  });
});

/// tests

const searchFocus = () => {
  document.querySelector(".onBlur").focus();
};
