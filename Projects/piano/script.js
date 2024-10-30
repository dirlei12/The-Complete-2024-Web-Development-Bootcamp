const doo = new Audio("sounds\\do.mp3");
const re = new Audio("sounds\\re.mp3");
const mi = new Audio("sounds\\mi.mp3");
const fa = new Audio("sounds\\fa.mp3");
const sol = new Audio("sounds\\sol.mp3");
const la = new Audio("sounds\\la.mp3");
const si = new Audio("sounds\\si.mp3");


// Função para reproduzir o som ao pressionar uma tecla
document.addEventListener("keydown", (event) => {
  const keyName = event.key;

  // Exemplo: reproduzir som quando a tecla "a" é pressionada
  if (keyName === "a") {
    doo.currentTime = 0; // Reinicia o som caso esteja tocando
    doo.play();
  }
  if (keyName === "s") {
    re.currentTime = 0; // Reinicia o som caso esteja tocando
    re.play();
  }
  if (keyName === "d") {
    mi.currentTime = 0; // Reinicia o som caso esteja tocando
    mi.play();
  }
  if (keyName === "f") {
    fa.currentTime = 0; // Reinicia o som caso esteja tocando
    fa.play();
  }
  if (keyName === "g") {
    sol.currentTime = 0; // Reinicia o som caso esteja tocando
    sol.play();
  }
  if (keyName === "h") {
    la.currentTime = 0; // Reinicia o som caso esteja tocando
    la.play();
  }
  if (keyName === "j") {
    si.currentTime = 0; // Reinicia o som caso esteja tocando
    si.play();
  }
});


