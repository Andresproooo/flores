    window.onload = () => {
        alert("No habia alfajores , pero toma chocolates :3");
         const box = document.getElementById('box');
    const fireworks = document.getElementById('fireworks');
box.addEventListener("click", () => {
        box.classList.toggle('open');
        fireworks.style.opacity = box.classList.contains('open') ? '1' : '0';
    });
      
 
    }


