let navHeaders =Array.from(document.querySelectorAll(".header-radio")); 
 
let checkMark = document.querySelectorAll(".checkmark");

let lists = Array.from(document.querySelectorAll(".dropdowns"));

let navLinks = document.querySelectorAll('[name="nav-links"]')
 
let inputSearch = document.querySelector(".search-div");  

let inputNav = document.querySelectorAll('[name="main_nav"]'); 

let inputNavArr = Array.from(inputNav) ; 

let stylesInput1 = {

    "width":"100%",
    "height":"100%",
    "overflow":"auto"
}

 

/* The focus and blur functions are for the state of the input field that 
responds by a background change when a user provides input to the input field.
*/
const onfocusFunction = () =>  
{ 
       inputSearch.style.backgroundColor = "#99999952"
} 

const onblurFunction = () => 
{ 
       inputSearch.style.backgroundColor = "transparent";
}


const navReloader = (char) => 
{  
 $('.header-radio').each( function()
 {
   if(!$(this).prop(':checked'))
    $(".dropdowns").eq($('.header-radio').index($(this))).css({
      width: "0",
      height: "0",
      overflow: "hidden",
    });  

 }); 

}    

navReloader();


navHeaders.map((each,ind,arr)=> 
       {  
           
        each.addEventListener("click",()=>
             {   
               if(each.checked === true)
               {          
                   Object.assign(lists[ind].style,stylesInput1)        

                   each.parentElement.style.color = "#000";  
                  
                   arr.forEach(item=> { 
                    if(item != each){ item.parentElement.style.color = "#6d6d6d"; } 
                                      }) 
               }
           }) 
        
       }
    ) 
     



    $(function () {
      $(".header-radio").click(function () {
        var $radio = $(this);
      
        // if this was previously checked

        if ($radio.data("waschecked") == true) { 
          $radio.prop("checked", false);
          $radio.data("waschecked", false);  
           /*
              $(".dropdowns").eq($(".header-radio").index($radio)).css({
                width: "0",
                height: "0",
                overflow: "hidden",
              }); */ 

           $(".nav-header-label").css({
             color: "#6d6d6d",
           });  

        } else 
        {     
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
              "border-bottom" : "none" ,
               "color" : "#ffffff"
          })

        if($radio.prop("checked"))
        { 
            $link.css({
              "border-bottom": "3px solid #61dafb ", 
              "color": "#61dafb"
            }); 

        } 
        
      }) 
    } 
      ); 
       



