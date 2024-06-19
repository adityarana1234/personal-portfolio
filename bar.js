let menuList = document.getElementById("nav");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "550px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}