
window.addEventListener("load", function (){

    /* ==== page loader ====*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".page-loader").style.display = "none";
    }, 600);


    // animation on this.scroll
    AOS.init();
});




/* ======= start toggler navbar =========== */

let navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}


/* ======= end toggler navbar =========== */



/* ======= start nav when clicking on a nav item =========== */

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});



/* ======= end nav when clicking on a nav item =========== */



/* ======= start sticky header =========== */

window.addEventListener("scroll", function() {
    if(this.pageYOffset > 60) {
        this.document.querySelector(".header").classList.add("sticky");
    } else {
        this.document.querySelector(".header").classList.remove("sticky");
    }
});


/* ======= end sticky header =========== */




/* ======= start menu tabs =========== */

let menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){

    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {

        let target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        let menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        AOS.init();
    }
});


/* ======= end menu tebs =========== */



