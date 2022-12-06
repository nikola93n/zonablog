


var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 6000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});


// jQuery for toggle dropdown menus
jQuery(document).ready(function () {
    //toggle sub-menus
    jQuery(".sub-btn").click(function () {
        jQuery(this).next(".sub-menu").slideToggle();
    });

    //toggle more-menus
    jQuery(".more-btn").click(function () {
        jQuery(this).next(".more-menu").slideToggle();
    });

    //javascript for the responsive navigation menu
    var menu = document.querySelector(".menu");
    var menuBtn = document.querySelector(".menu-btn");
    var closeBtn = document.querySelector(".close-btn");

    menuBtn.addEventListener("click", () => {
        menu.classList.add("active");
    });
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

//JS for the navigation bar effect on scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 0);
});



