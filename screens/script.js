document.getElementById("foto").addEventListener("click", () => {
    // Dispara confetes do centro da tela
    confetti({
        particleCount: 2000, // Quantidade de confetes
        spread: 190,         // Dispersão dos confetes
        origin: { y: 0.89 }  // Origem vertical (0 a 1)
    });
});
