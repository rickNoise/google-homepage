// code for method 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");

// code for method 3
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => {
  alert(e.target);
  e.target.style.background = "steelblue";
});

// code for Another Button Playground section
const buttons = document.querySelectorAll("button.buttonClass");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
