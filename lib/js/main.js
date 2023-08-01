let img1 = document.getElementById("first");
let img2 = document.getElementById("second");

//img1.style.visibility = "hidden";

//img1.style.display = "none";

//img1.remove();

let newImg = document.createElement("img");
let mainContain = document.querySelector(".main-container");
mainContain.appendChild(newImg);

newImg.src = "assets/cry.png";
