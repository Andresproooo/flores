window.onload = () => {
  alert("No habia alfajores , pero toma chocolates :3");
  const box = document.getElementById("box");
  const fireworks = document.getElementById("fireworks");
  box.addEventListener("click", () => {
    box.classList.toggle("open");
    fireworks.style.opacity = box.classList.contains("open") ? "1" : "0";
  });
// Animación de escritura automática
const frase = "'Si quieres ser mi estrella, prometo ser tu cielo.'";
const poemaElement = document.querySelector(".poema");

let index = 0;

function escribirTexto() {
  if (index < frase.length) {
    poemaElement.textContent += frase.charAt(index);
    index++;
    setTimeout(escribirTexto, 100); // Velocidad de escritura (100ms por letra)
  } else {
    poemaElement.style.borderRight = "none"; // Quita el cursor al finalizar
  }
}

escribirTexto(); // Inicia la animación de escritura
};


  

