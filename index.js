const accordions = document.querySelectorAll(".accordion");
const panels = document.querySelectorAll(".panel");
const labels = document.querySelectorAll(".label");

accordions.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (Array.from(item.classList).includes("active")) {
      panels[index].style.height = "0px";
      labels[index].innerHTML = "+";
      labels[index].style.right = "10px";
      item.classList.remove("active");
    } else {
      labels[index].style.right = "14px";
      labels[index].innerHTML = "-";
      item.classList.add("active");
      panels[index].style.height = "160px";
    }
  });
});
