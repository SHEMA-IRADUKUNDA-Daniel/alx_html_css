const openModel = document.querySelector(".open");
const closeModel = document.querySelector(".close");
const navLinks = document.querySelector(".navLinks");

openModel.addEventListener("click", () => {
  navLinks.style.display = "block";
  console.log(openModel);
  closeModel.style.display = "block";
  openModel.style.display = "none";
});

closeModel.addEventListener("click", () => {
  navLinks.style.display = "none";
  closeModel.style.display = "none";
  openModel.style.display = "block";
});
