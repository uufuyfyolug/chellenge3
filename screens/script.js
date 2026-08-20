document.getElementById("foto").addEventListener("click", () => {
    // Dispara confetes do centro da tela
    confetti({
        particleCount: 2000, // Quantidade de confetes
        spread: 190,         // Dispersão dos confetes
        origin: { y: 0.89 }  // Origem vertical (0 a 1)
    });
});
const botaoTema = document.getElementById("tema");
const iconeTema = document.getElementById("iconeTema");


if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
    iconeTema.src = "imagens/lua.png";
} else {
    document.body.classList.remove("claro");
    iconeTema.src = "imagens/brilho-do-sol.png";
}

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {

        localStorage.setItem("tema", "claro");
        iconeTema.src = "imagens/lua.png";

    } else {

        localStorage.setItem("tema", "escuro");
        iconeTema.src = "imagens/brilho-do-sol.png";

    }

});

const imagens = [
    "imagens/images.png",
    "imagens/conecte-se.png",
    "imagens/chapeu.png",
    "imagens/catalogo.png"
]

let imagemAtual = 0;

function avancar() {
    imagemAtual++;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }
    document.getElementById("projetos").src = imagens[imagemAtual]


}
function Voltar() {
    imagemAtual--;
    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    }
    document.getElementById("projetos").src = imagens[imagemAtual];
}