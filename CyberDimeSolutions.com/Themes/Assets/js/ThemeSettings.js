/* =================================== */
/*           Custom js Section
/* =================================== */

$(document).ready(function () {
// header section nav items active class add/remove
    $("header nav ul.navbar-nav li").click(function () {
        $("header nav ul.navbar-nav li").removeClass("active");
        $(this).addClass("active");
    });    
});