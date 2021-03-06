/*de nav met de id menu in de html opzoeken en de styling css class show word toegevoegd aan de nav#menu  */

function showMenu() {
  document.querySelector("nav#menu").classList.add('show');
}


/*de nav met de id menu in de html opzoeken en de styling css class show word weggehaald van de nav#menu */

function hideMenu() {
  document.querySelector("nav#menu").classList.remove('show');
}

/*als er gedrukt wordt op de icoon met id menubutton roep ik de functie showMenu aan die het menu uitklapt. */

document.querySelector("#menubutton").addEventListener("click", showMenu);

/*als er gedrukt wordt op de icoon met id menubutton roep ik de functie showMenu aan die het menu inklapt. */

document.querySelector("nav#menu").addEventListener("click", hideMenu);

/*wishlistknop zoekt de button op met de id wishlist*/

let wishListKnop = document.querySelector("button#wishlist");

/*een terugkoppeling in de console log voor als er gedrukt word*/

console.log(wishListKnop)

/*als er gedrukt wordt op de wishlist knop wordt de hart gevuld doormiddel van de functie 
data filled staat voor /*custom data atribuut om bij te houden of het hartje gevuld is of niet, dmv een boolean */

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

/*dropdownknop de button haalt de button op met de id dropwdown-btn*/

let dropdownKnop = document.querySelector("button#dropdown-btn")
dropdownKnop.addEventListener("click", toggleDropdown);

/*een terugkoppeling in de console log voor als er gedrukt word*/


console.log(dropdownKnop)

/*als er gedrukt wordt op de meer info knop wordt de de tekst in de ul uitgeklapt met de functie toggleDropdown*/


function toggleDropdown() {
  console.log("Toggling dropdown..")
  let dropdownText = document.querySelector("ul#dropdown-text")
  if (dropdownText.classList.contains('show')) {
    dropdownText.classList.remove('show');
  } else {
    dropdownText.classList.add('show');
  }
}
