/*criando variaveis*/ 
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

/* quando clicar nomenu seraativado ou desativado*/
hamburger.addEventListener("click", ()=> 
nav.classList.toggle("active"));