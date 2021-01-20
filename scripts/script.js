

/*de nav met de id menu in de html opzoeken en de styling show laten zien*/

function showMenu() {
  document.querySelector("nav#menu").classList.add('show');
}


/*de nav met de id menu in de html opzoeken en de styling show weghalen*/

function hideMenu() {
  document.querySelector("nav#menu").classList.remove('show');
}

/*als er gedrukt word op de button laat dan de menu zien*/

document.querySelector("#menubutton").addEventListener("click", showMenu);

/*als er gedrukt word op de button laat dan de menu zien*/

document.querySelector("nav#menu").addEventListener("click", hideMenu);

/*wishlistknop zoekt de button op met de id wishlist*/

let wishListKnop = document.querySelector("button#wishlist")

/*een terugkoppeling in de console log voor als er gedrukt word*/

console.log(wishListKnop)

/*als er gedrukt word op de button laat de hart gevuld raken*/

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

/*dropdownknop de button op met de id dropwdown-btn*/

let dropdownKnop = document.querySelector("button#dropdown-btn")
dropdownKnop.addEventListener("click", toggleDropdown);

/*een terugkoppeling in de console log voor als er gedrukt word*/


console.log(dropdownKnop)

/*als er op de knop word gedrukt toon de bijbehorende tekst, dus de ul met id dropdown-text
telken als er op gedrukt word verschijnt het of verbergt het.
*/


function toggleDropdown() {
  console.log("Toggling dropdown..")
  let dropdownText = document.querySelector("ul#dropdown-text")
  if (dropdownText.classList.contains('show')) {
      dropdownText.classList.remove('show');
  } else {
      dropdownText.classList.add('show');
  }
}
