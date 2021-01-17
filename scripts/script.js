// JavaScript Document
function showMenu() {
  document.querySelector("nav#menu").classList.add('show');
}

function hideMenu() {
  document.querySelector("nav#menu").classList.remove('show');
}

document.querySelector("#menubutton").addEventListener("click", showMenu);
document.querySelector("nav#menu").addEventListener("click", hideMenu);

function hartVullen() {
  document.querySelector("img#hart").classList.add('vullen');
}

document.querySelector("img#hart").toggle("click", hartVullen);
