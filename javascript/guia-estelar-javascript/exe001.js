/*
  Transformar notas escolares

  Crie um algoritmo que transforma as notas do sistema numerico para sistema de notas
  em caracteres tipo A B C

  - De 90 para cima - A
  - Entre 80 - 89 - B
  - Entre 70 - 79 - C
  - Entre 60 - 69 - D
  - Menor que 60 - F

*/
const transformNotes = (note) => {
  if(note >= 90 && note <= 100){
    console.log("Sua nota e A");
  } else if (note >= 80 && note <= 89){
    console.log("Sua nota e B");
  } else if (note >= 70 && note <= 79) {
    console.log("Sua nota e C");
  } else if (note >= 60 && note <= 69) {
    console.log("Sua nota e D");
  } else if (note >= 0 && note < 60) {
    console.log("Sua nota e F");
  } else if (note > 100) {
    console.log("Nota invalida")
  } else if (note < 0) {
    console.log("Nota invalida")
  }
}

transformNotes(-10);