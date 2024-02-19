const cartDropdownContentMobile = document.getElementById('cart-dropdown-mobile');
const cartDropdownContentDesktop = document.getElementById('cart-dropdown-desktop');
const closeCartBtnMobile = document.getElementById('close-btn-mobile');
const closeCartBtnDesktop = document.getElementById('close-btn-desktop');

// dropdown mobile
function cartDropdownMobile() {
    cartDropdownContentMobile.style.display = "block";
}

// dropdown desktop
function cartDropdownDesktop(){
    cartDropdownContentDesktop.style.display = "block";
}

// close dropdown mobile
closeCartBtnMobile.addEventListener("click", closeCartDropdownMobile);

function closeCartDropdownMobile() {
    document.getElementById("cart-dropdown-mobile").style.display = "none";
}

// close dropdown desktop

closeCartBtnDesktop.addEventListener("click", closeCartDropdownDesktop);

function closeCartDropdownDesktop() {
    document.getElementById("cart-dropdown-desktop").style.display = "none";
}