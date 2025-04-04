// show's the list when the icons (the burger menu) is clicked
const icons = document.querySelector(".icons");
const list = document.querySelector(".list");

icons.addEventListener("click", () => {
  list.classList.toggle("show");
});
