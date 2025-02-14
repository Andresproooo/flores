window.onload = () => {
        document.body.classList.remove("container");
        const playMusicButton = document.getElementById("play-music");
        const bgMusic = document.getElementById("bg-music");;
      
        // Evento que se dispara cuando se hace clic en el botón
        playMusicButton.addEventListener("click", () => {
                if (bgMusic.paused) {
                    // Si la música está pausada, reproducirla
                    bgMusic.play();
                    playMusicButton.textContent = "Reproducir Música";  // Cambiar el texto del botón
                } else {
                    // Si la música está reproduciéndose, pausarla
                    bgMusic.pause();
                    playMusicButton.textContent = "Pausar Música";  // Cambiar el texto del botón
                }
            });
    };