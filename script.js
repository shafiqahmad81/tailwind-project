let html = document.getElementById("html");
let change_btn = document.getElementById("change_btn");
let change_image = document.getElementById("change_image");

change_btn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (change_image.src.includes("moon.svg")) {
    change_image.src = "sun.svg";
  } else {
    change_image.src = "moon.svg";
  }
});
let change_btn2 = document.getElementById("change_btn2");
let change_image2 = document.getElementById("change_image2");

change_btn2.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (change_image2.src.includes("moon.svg")) {
    change_image2.src = "sun.svg";
  } else {
    change_image2.src = "moon.svg";
  }
});

// mobile menu
let menu_btn = document.getElementById("menu_btn");
let main_menu = document.getElementById("main_menu");

menu_btn.addEventListener("click", () => {
  main_menu.classList.toggle("hidden");
});
