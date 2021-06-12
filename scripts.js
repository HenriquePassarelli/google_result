

let topNav = document.getElementById('top');
let topTypes  = document.getElementById('choice_types');

let onScroll = function () {
    var y = window.scrollY;
    if (y >=10) {
        topNav.classList.add('active');
        topTypes.style.display = "none";
    }
    else {
        topNav.classList.remove('active');

        topTypes.style.display = "flex";

    }
} 


window.addEventListener("scroll", onScroll);