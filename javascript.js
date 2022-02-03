let navHeaders = Array.from(document.querySelectorAll(".header-radio"));

let iFrame = document.querySelector("#iframe");

let lists = Array.from(document.querySelectorAll(".dropdowns"));

let navLinks = Array.from(document.querySelectorAll('[name="nav-links"]'));

let inputSearch = document.querySelector(".search-div");

const Btn = document.querySelector("#Btn");  


//-------//

/* the lists variable is a nodelist containing li elements which are the subheaders under each header in the side nav section. They are hidden
by default which is what the code below does. It hides the subheaders  */

lists.forEach((item, ind, arr) =>
  Object.assign(item.style, {
    height: "0",
    width: "0",
    overflow: "hidden",
  })
);

//---------//


//  The stylesInput1 object is a collection of css styles to be applied on a click event of the nav headers. 


let stylesInput1 = {
  width: "100%",
  height: "100%",
  overflow: "auto",
}; 

/* 
   The navHeadersFunc handles the three effects that are triggered when clicking on the headers on the side navbar section.
   These effects are a text color change, the collapse of the header to reveal subheaders and to close other headers.  
*/


const navHeadersFunc=(stylesInput1)=>
{ 
navHeaders.map((each, ind, arr) => {
  each.addEventListener("click", () => {
  
    if (each.checked === true) {
             

      //The object assign code allows the header that recieved a click to collapse and reveal the subheaders 
      Object.assign(lists[ind].style, stylesInput1);

      //This code  changes the text color of the active header 
      each.parentElement.style.color = "#000";

      //This forEach method on the arr array hides the subheaders of the inactive headers and gives the  header  text color a gray default color 
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
}  
navHeadersFunc(stylesInput1);

//--------//

/* The navLinks variable is a nodelist of anchor tags which when clicked change the display the html in an iframe of the hmtl document that 
they are linked to.Along with this function the text content of each anchor tag changes color and its font weight  to emphasize the active
document on display*/

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



//--------//

/* The focus and blur functions are for the state of the input field that 
responds by a background color change when a user provides input to the input field. Moreover, on smaller screen sizes the text input field
is hidden with only the magnifying glass visible however when this icon is clicked the textarea is made visible
*/

const onfocusFunction = () => {
  inputSearch.style.backgroundColor = "#99999952";
};

const onblurFunction = () => {
  inputSearch.style.backgroundColor = "transparent";
};

//---------//

/*
 Since the navHeadersFunc only closes the subheaders passively, The navReloader serves to persist the functionality for when you toggle 
 the navHeaders. On the original website the headers toggle but the default radio  buttons don't have that functionality. The code below 
 the navReloader is a function that gives the toggle functionality to radio buttons using custom attributes to capture state changes of 
 a radio button 
 */


const navReloader = () => {
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


//---------//  

Btn.addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("navUnchecked");
}); 

//--------// 

const searchFocus = () => {
  document.querySelector(".onBlur").focus();
};

/*
  The function below handles the functionality of the main header navigation links.
  The nav active linked will recieve a color and a border bottom. 
*/  


$(function () {
  $(".main_header_radio").click(function () {
    var $radio = $(this);
    var $link = $(".nav_li").eq($(".main_header_radio").index($radio));

    $(".nav_li").css({
      "border-bottom": "none",
      "color": "#ffffff",
    });  

    let viewP = window.matchMedia("(max-width: 599px)")  

    viewP.addEventListener("change",()=>
        { 
             console.log(viewP.matches);
        }
     )

    const navLink = (viewP) =>
    {   

      if(viewP.matches)
      { 
        if ($radio.prop("checked")) {
         $link.css({
        "color": "#61dafb",
      });
        }

      }else  
      { 
          if ($radio.prop("checked")) {
            $link.css({
              "border-bottom": "4px solid #61dafb ",
              color: "#61dafb",
            });
          }
      }
    }  

    navLink(viewP); 

    /*
    if ($radio.prop("checked")) {
      $link.css({
        "border-bottom": "4px solid #61dafb ",
        color: "#61dafb",
      });
    } */ 

  });

});

//--------// 


/// This fuctionality is for when the viewport width is <=599px

const navReloader2 = (screenMaxWidth,screenMinWidth) => {
  $(".header-radio").each(function () {
    if (screenMaxWidth.matches) {
      $(".dropdowns")
        .eq($(".header-radio").index($(this)))
        .css({
          width: "100%",
          height: "100%",
        });
    }
    
    if(screenMinWidth.matches)
    { 
       $(".dropdowns")
         .eq($(".header-radio").index($(this)))
         .css({
           width: "0",
           height: "0",
         });
    }
  }); 

  navReloader2(screenMaxWidth, screenMinWidth);
}; 


//button feature for the width <=599px nav menu



const screenMaxWidth = window.matchMedia("(max-width:599px)");

const screenMinWidth = window.matchMedia("(min-width:600px)");
navReloader2(screenMaxWidth,screenMinWidth);
screenWidth.addEventListener("change",navReloader2);

