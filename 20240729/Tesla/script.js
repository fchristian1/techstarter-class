let activeElement = document.querySelector(".click-active");
const clickElement = document.querySelectorAll(".click");

console.log(clickElement);

clickElement.forEach((elm) => {
  elm.addEventListener("click", () => {
    //ändern der css classen
    activeElement.classList.remove("click-active");
    elm.classList.add("click-active");

    //ändern des Titels unter der Auswahl
    let titleText = elm.getAttribute("data-title");
    let colorTitle = document.getElementById("color-title");
    colorTitle.innerText = titleText;

    //ändern des Bildes
    let name = elm.getAttribute("data-name");
    let img = document.getElementById("car_img");
    img.src = "./imgs/compositor-" + name + ".png";

    //ändern des activen Elements
    activeElement = elm;
  });
});
