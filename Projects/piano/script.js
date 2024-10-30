var doo = new Audio("sounds\\do.mp3");
var re = new Audio("sounds\\re.mp3");
var mi = new Audio("sounds\\mi.mp3");
var fa = new Audio("sounds\\fa.mp3");
var sol = new Audio("sounds\\sol.mp3");
var la = new Audio("sounds\\la.mp3");
var si = new Audio("sounds\\si.mp3");

// Função para reproduzir o som ao clicar com o mouse

var keyNumber = document.querySelectorAll(".key").length;

for (var i = 0; i < keyNumber; i++){
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    makeSound(buttonInnerHTML);
  });
}


// Função para reproduzir o som ao pressionar uma tecla
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
})



//funcao make sound

function makeSound(key) {
  switch (key) {
    case "a":
      doo.currentTime = 1; // Reinicia o som caso esteja tocando
      doo.play();
      break;
    case "s":
      re.currentTime = 1;
      re.play();
      break;
    case "d":
      mi.currentTime = 1;
      mi.play();
      break;
    case "f":
      fa.currentTime = 1;
      fa.play();
      break;
    case "g":
      sol.currentTime = 1;
      sol.play();
      break;
    case "h":
      la.currentTime = 1;
      la.play();
      break;
    case "j":
      si.currentTime = 1;
      si.play();
      break;
  
    default:
      break;
  };
};

// Função para tocar a música  estrelinha automaticamente
function tocarEstrelinha() {
  const sequencia = ["a", "a", "g", "g", "h", "h", "g", 
                     "f", "f", "d", "d", "s", "s", "a",
                     "g", "g", "f", "f", "d", "d", "s",
                     "g", "g", "f", "f", "d", "d", "s",
                     "a", "a", "g", "g", "h", "h", "g",
                     "f", "f", "d", "d", "s", "s", "a"];

  let i = 0;
  const intervalo = setInterval(() => {
    if (i < sequencia.length) {
      makeSound(sequencia[i]);
      i++;
    } else {
      clearInterval(intervalo); // Para o intervalo ao terminar a sequência
    }
  }, 500); // Define o tempo de intervalo entre cada nota
}
// Event listener para o botão HTML
document.getElementById("tocarEstrelinha").addEventListener("click", tocarEstrelinha);


// Função para tocar a música tema do Mario automaticamente
function tocarMario() {
  const sequencia = [
    "g", "g", "s", "g", "s", "d", 
    "s", "g", "s", "a", "f", "d", "d", 
    "a", "d", "f", "s", "g", "d", "s"
  ];

  let i = 0;
  const intervalo = setInterval(() => {
    if (i < sequencia.length) {
      makeSound(sequencia[i]);
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, 500); // Define o tempo de intervalo entre cada nota
}

// Event listener para o botão HTML
document.getElementById("tocarMario").addEventListener("click", tocarMario);

// Função para tocar "Parabéns pra Você" automaticamente
function tocarParabens() {
  const sequencia = [
    "s", "s", "d", "s", "g", "f", // Parabéns pra você
        "", // Pausa
        "s", "s", "d", "s", "h", "g", // Nesta data querida
        "", // Pausa
        "s", "s", "a", "g", "f", "d", // Muitas felicidades
        "a", "", // Breve pausa e repete "a"
        "h", "h", "g", "f", "g", "f"  // Muitos anos de vida
  ];

  let i = 0;
  const intervalo = setInterval(() => {
    if (i < sequencia.length) {
      makeSound(sequencia[i]);
      i++;
    } else {
      clearInterval(intervalo); // Para o intervalo ao terminar a sequência
    }
  }, 430); // Define o tempo de intervalo entre cada nota
}

// Event listener para o botão HTML
document.getElementById("tocarParabens").addEventListener("click", tocarParabens);

// asa branca
function tocarAsaBranca() {
  const sequencia = [
    "d", "d", "f", "g", "f", "d", // Quando oiei a terra ardendo
    "a", "g", "f", "g", "d",      // Qual fogueira de São João
    "",                           // Pausa
    "d", "d", "f", "g", "f", "d", // Eu perguntei a Deus do céu
    "a", "g", "f", "g", "d",      // Ai, por que tamanha judiação
    "",                           // Pausa
    "f", "f", "a", "f", "g", "d", // Que braseiro, que fornalha
    "a", "g", "f", "g", "d",      // Nem um pé de plantação
    "",                           // Pausa
    "d", "f", "g", "f", "d",      // Por falta d'água perdi meu gado
    "a", "g", "f", "g", "d"       // Morreu de sede meu alazão
  ];

  let i = 0;
  const intervalo = setInterval(() => {
    if (i < sequencia.length) {
      if (sequencia[i] !== "") {
        makeSound(sequencia[i]);
      }
      i++;
    } else {
      clearInterval(intervalo); // Para o intervalo ao terminar a sequência
    }
  }, 400); // Ajuste o intervalo conforme necessário
}
// Event listener para o botão HTML
document.getElementById("tocarAsaBranca").addEventListener("click", tocarAsaBranca);

// hino brasileiro
function tocarHinoBrasileiro() {
  const sequencia = [
    // Primeira linha
    "c", "c", "d", "e", "f", "e", "d", "c", "d", // Ouviram do Ipiranga as margens plácidas
    "e", "d", "c", "d", "e", "f", "g",           // De um povo heroico o brado retumbante
    "",                                           // Pausa
    "g", "f", "e", "d", "c", "d", "e",           // E o sol da liberdade em raios fúlgidos
    "f", "e", "d", "c", "d", "e", "f",           // Brilhou no céu da pátria nesse instante

    // Segunda linha
    "f", "e", "d", "c", "b", "c", "d",           // Se o penhor dessa igualdade
    "e", "f", "g", "f", "e", "d", "c",           // Conseguimos conquistar com braço forte
    "",                                           // Pausa
    "c", "d", "e", "f", "g", "f", "e",           // Em teu seio, ó liberdade
    "d", "c", "b", "c", "d", "e", "f",           // Desafia o nosso peito a própria morte

    // Terceira linha
    "",                                           // Pausa
    "g", "f", "e", "d", "c", "b", "c",           // Ó pátria amada, idolatrada
    "d", "e", "f", "g", "a", "g", "f",           // Salve! Salve!
    "",                                           // Pausa
    "g", "f", "e", "d", "c", "d", "e",           // Brasil, um sonho intenso, um raio vívido
    "f", "g", "a", "g", "f", "e", "d",           // De amor e de esperança à terra desce

    // Quarta linha
    "d", "e", "f", "g", "a", "g", "f", "e",      // Se em teu formoso céu, risonho e límpido
    "d", "c", "b", "c", "d", "e", "f",           // A imagem do Cruzeiro resplandece

    // Quinta linha
    "",                                           // Pausa
    "g", "f", "e", "d", "c", "d", "e",           // Gigante pela própria natureza
    "f", "g", "a", "g", "f", "e", "d",           // És belo, és forte, impávido colosso
    "",                                           // Pausa
    "d", "e", "f", "g", "a", "g", "f", "e",      // E o teu futuro espelha essa grandeza

    // Final
    "d", "c", "b", "c", "d", "e", "f"            // Terra adorada, entre outras mil
  ];

  let i = 0;
  const intervalo = setInterval(() => {
    if (i < sequencia.length) {
      if (sequencia[i] !== "") {
        makeSound(sequencia[i]);
      }
      i++;
    } else {
      clearInterval(intervalo); // Para o intervalo ao terminar a sequência
    }
  }, 400); // Ajuste o intervalo conforme necessário
}
// Event listener para o botão HTML
document.getElementById("tocarHinoBrasileiro").addEventListener("click", tocarHinoBrasileiro);


// noite feliz
function tocarNoiteFeliz() {
  const sequencia = [
    "g", "a", "g", "e", // Noite feliz
    "g", "a", "g", "e", // Noite feliz
    "d", "d", "b", "c", "d", // Ó Senhor, Deus de amor
    "", // Pausa
    "e", "e", "f", "d", // Pobrezinho nasceu em Belém
    "", // Pausa
    
    // Segunda estrofe
    "g", "a", "g", "e", // Eis na lapa
    "g", "a", "g", "e", // Jesus, nosso bem
    "d", "d", "b", "c", "d", // Dorme em paz
    "", // Pausa
    "e", "e", "f", "d", // Ó Jesus
    "", // Pausa
    
    // Terceira estrofe (repetição e finalização)
    "g", "a", "g", "e", // Noite feliz
    "g", "a", "g", "e", // Noite feliz
    "d", "d", "b", "c", "d", // Ó Senhor, Deus de amor
    "", // Pausa
    "e", "e", "f", "d" // Pobrezinho nasceu em Belém
  ];
  
  let i = 0;
  const intervalo = setInterval(() => {
    if (i < sequencia.length) {
      if (sequencia[i] !== "") {
        makeSound(sequencia[i]);
      }
      i++;
    } else {
      clearInterval(intervalo); // Para o intervalo ao terminar a sequência
    }
  }, 500); // Mantém o ritmo lento e relaxante
}
// Event listener para o botão HTML
document.getElementById("tocarNoiteFeliz").addEventListener("click", tocarNoiteFeliz);






