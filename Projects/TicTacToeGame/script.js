var crossImg = "images/cross.png";
var circleImg = "images/circle.png";

// function playX() {
//     var cross = document.getElementsByClassName("img1")[0].setAttribute("src",crossImg);
// }
// function playO() {
//     var cross = document.getElementsByClassName("img4")[0].setAttribute("src",circleImg);
// }

// Seleciona todas as imagens dentro da div com a classe "board"
const images = document.querySelectorAll('.board img');

// Adiciona um ouvinte de evento "click" para cada imagem
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        // Quando uma imagem é clicada, o índice da célula é exibido
        console.log(`Imagem clicada: img${index + 1}`);
    });
});

