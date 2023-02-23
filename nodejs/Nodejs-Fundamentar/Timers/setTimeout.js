//setTimeout roda uma funcao depois de X milissegundos
const timeOut = 3000;
const finished = () => console.log("done!");

setTimeout(finished, timeOut);

console.log("Mostrar execução!");