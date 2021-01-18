var width = window.innerWidth;
var main = document.querySelector(".main_cover");
var art_title = document.querySelector(".art_title");
var image_silde = document.querySelectorAll("article ul li");
var b_and_a = document.querySelector(".b_and_a");
var array_length = image_silde.length;
var image_index = 3;
var image_index_sub = 1;


    if (width <= 1200) {
        main.style.width = "100%";
        b_and_a.style.width = "900px";
        document.querySelector(".sub_nav_0").style.display = "none";
        document.querySelector(".sub_nav_1").style.display = "none";
        
    } else {
        main.style.width = "100%";
        b_and_a.style.width = "1800px";
        document.querySelector(".sub_nav_0").style.display = "none";
        document.querySelector(".sub_nav_1").style.display = "none";
    };


window.addEventListener("resize",function(){
    var width = window.innerWidth;
    
    if (width <= 1200) {
        main.style.width = "100%";
        b_and_a.style.width = "900px";
        document.querySelector(".sub_nav_0").style.display = "none";
        document.querySelector(".sub_nav_1").style.display = "block";
        
    } else {
        main.style.width = "100%";
        b_and_a.style.width = "1800px";
        document.querySelector(".sub_nav_0").style.display = "block";
        document.querySelector(".sub_nav_1").style.display = "none";
    };
    
    });

setInterval(function () {
    var mainimage = document.querySelector("article ul li:nth-child("+image_index+")");
    var subimage = document.querySelector("article ul li:nth-child("+image_index_sub+")");
    
    image_index_sub = image_index;
    
    subimage.style.left = "-1900px";
    subimage.style.zIndex = "0";
    
    image_index = image_index % array_length + 1;
    
    setTimeout(function(){
        subimage.style.left = "1900px";
    }, 1500);
    
    mainimage.style.left = "0px";
    mainimage.style.zIndex = "3";

}, 3000);



var box_index = 0;
var box_on = document.querySelector(".image_box_on_"+box_index);
var image_button_0 = document.querySelector(".image_button_0");
var image_button_1 = document.querySelector(".image_button_1");
var image_button_2 = document.querySelector(".image_button_2");
var image_button_3 = document.querySelector(".image_button_3");
var main_x = 0;
var get_box_width = box_on.offsetWidth;


image_button_0.addEventListener("mousedown",function(){
    get_box_width = box_on.offsetWidth;
    main_x = event.pageX;
  
    set_time_add_p();
});

image_button_0.addEventListener("touchstart",function(){
    get_box_width = box_on.offsetWidth;
    main_x = event.touches[0].clientX;
   
    set_time_add_m();
});

window.addEventListener("mouseup",function(){
window.removeEventListener("mousemove",get_move);
});

window.addEventListener("touchend",function(){
window.removeEventListener("touchmove",get_touch);
});


 function get_touch(){
     
    var touch_x = event.touches[0].clientX;
    var get_move_X = touch_x - main_x;
     
    var sub_width = get_box_width + get_move_X;
     
    box_on.style.width = sub_width + "px";
     
};

 function get_move(){
     
    var move_x = event.pageX;
    var get_move_X = move_x - main_x;
    var sub_width = get_box_width + get_move_X;
     
    box_on.style.width = sub_width + "px";
};

function set_time_add_p(){
    window.addEventListener("mousemove", get_move);
};

function set_time_add_m(){
    window.addEventListener("touchmove", get_touch);
};

