const numero1= document.querySelector("#um");
const numero2 = document.querySelector("#dois");
var btnMais = document.querySelector("#somar");
const message = document.querySelector("#message")

btnMais.addEventListener("click", function(){

    const valor1 = parseFloat(numero1.value);
    const valor2 = parseFloat(numero2.value);

   const resultado = valor1 + valor2;     

console.log(resultado);




})