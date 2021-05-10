$(document).ready(function (){

    // responsive menu..

    let menu = false;

    $(".menu-func-button").click(function () {

        if(menu === false) {

            $(".open-menu").addClass("close-menu");
            $(".navbar-menu").css("animation", "0.5s alternate openMenu");
            $(".navbar-menu").css("width", "200px");
            $(".navbar-menu").css("left", "0px");
            $(".fa-bar").css("top", "17px");
            $(".dsp-nne").css("display", "none");
            $(".degre-plus").css("transform", "rotate(45deg)");
            $(".degre-minus").css("transform", "rotate(-45deg)");
            $(".close-menu").removeClass("open-menu");
            $(".menu-func-button").css("background-color", "rgb(4, 56, 59)");
            menu = true;
            return;
        } else {
            $(".close-menu").addClass("open-menu");
            $(".navbar-menu").css("animation", "0.5s alternate closeMenu");
            $(".navbar-menu").css("width", "0px");
            $(".navbar-menu").css("left", "-40px");
            $(".dsp-nne").css("display", "block");
            $(".dsp-nne").css("top", "16px");
            $(".degre-plus").css("transform", "rotate(0deg)");
            $(".degre-plus").css("top", "11px");
            $(".degre-minus").css("transform", "rotate(0deg)");
            $(".degre-minus").css("top", "21px");
            $(".open-menu").removeClass("close-menu");
            $(".menu-func-button").css("background-color", "");
            menu = false;
            return;
        };

    });

    // Search..

    let searchOpen = false;

    $(".searchbtn").click(function () {
        
        if(searchOpen == false) {
            $(".search-content").addClass("search-label");
            $("#search").addClass("search");
            searchOpen = true;
            return; 
        } else {
            $(".search-content").removeClass("search-label");
            $("#search").removeClass("search");
            searchOpen = false;
            return;
        }

    });
    

    // Ready closed...
});
