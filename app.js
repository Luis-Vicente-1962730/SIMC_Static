document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded",()=>{

const messages = [
  "Distribuidor autorizado de marcas líderes.",
  "19 años impulsando la automatización industrial",
  "Cobertura y envíos a todo México"
];

let current = 0;

const message = document.getElementById("message-slider");

setInterval(()=>{
  message.style.opacity = 0;
  setTimeout(()=>{
    current = (current+1) % messages.length;
    message.textContent = messages[current];
    message.style.opacity = 1;
  },400);
},3500);

});
