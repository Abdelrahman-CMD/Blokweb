function showMenu() {
  document.querySelector("nav#menu").classList.add('show');
}

function hideMenu() {
  document.querySelector("nav#menu").classList.remove('show');
}

document.querySelector("#menubutton").addEventListener("click", showMenu);
document.querySelector("nav#menu").addEventListener("click", hideMenu);

let wishListKnop = document.querySelector("button#wishlist")

console.log(wishListKnop)
wishListKnop.addEventListener("click", wishlistKlik)

function wishlistKlik() {
  let hartImg = wishListKnop.querySelector("img#hart")
  console.log("Clicked on the add wishlist button")
  if (hartImg.getAttribute("data-filled") === "false") {
    hartImg.src = "./images/heartfilled-svgrepo-com.svg"
    hartImg.setAttribute("data-filled", "true")
  } else {
    hartImg.setAttribute("data-filled", "false")
    hartImg.src = "./images/heart-svgrepo-com.svg"
  }
  console.log(hartImg.src)
}

let dropdownKnop = document.querySelector("button#dropdown-btn")
dropdownKnop.addEventListener("click", toggleDropdown);

console.log(dropdownKnop)

function toggleDropdown() {
  console.log("Toggling dropdown..")
  let dropdownText = document.querySelector("ul#dropdown-text")
  if (dropdownText.classList.contains('show')) {
      dropdownText.classList.remove('show');
  } else {
      dropdownText.classList.add('show');
  }
}
