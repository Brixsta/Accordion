const accordions = document.querySelectorAll(".accordion");
const panels = document.querySelectorAll(".panel");
const labels = document.querySelectorAll(".label");

accordions.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.isClicked) {
      item.isClicked = false;
      panels[index].style.height = "0px";
      labels[index].innerHTML = "+";
    } else {
      labels[index].innerHTML = "-";
      item.isClicked = true;
      panels[index].style.height = "160px";
    }
  });
});