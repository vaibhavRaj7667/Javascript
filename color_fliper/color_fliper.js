const colors = ["green", "blue", "red", "gold", "pink"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomnum = getrandomnum();

  document.body.style.backgroundColor = colors[randomnum];
  color.textContent = colors[randomnum];
});
function getrandomnum() {
  return Math.floor(Math.random() * colors.length);
}
