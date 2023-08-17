document.getElementById("bold").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.classList.toggle("font-bold");
});
document.getElementById("italic").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.classList.toggle("italic");
});
document.getElementById("underline").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.classList.toggle("underline");
});
document.getElementById("text-left").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.classList.toggle("text-left");
});
document.getElementById("text-center").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.classList.toggle("text-center");
});
document.getElementById("text-right").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.classList.toggle("text-right");
});
document
  .getElementById("font-size")
  .addEventListener("change", function (event) {
    const fontSize = event.target.value;
    const textArea = document.getElementById("text-area");
    textArea.style.fontSize = fontSize + "px";
  });
document
  .getElementById("text-color")
  .addEventListener("change", function (event) {
    const textColor = event.target.value;
    const textArea = document.getElementById("text-area");
    textArea.style.color = textColor;
  });
