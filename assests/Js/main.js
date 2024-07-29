let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

//   scroll up
// const toTop = document.querySelector(".to_top");
// window.addEventListener("scroll", () => {
// if (window.pageYOffset > 100) {
// toTop.classList.add("active");
// } else {
// toTop.classList.remove("active");
// }
// });
