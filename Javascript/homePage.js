const hamburger = document.querySelector(".hamburger");
hamburger.onclick = () => {
  const navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
