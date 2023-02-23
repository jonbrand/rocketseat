const questions = [
  "O que eu aprendi hoje?",
  "O que eu deixei de fazer? Como poderia melhorar isso?",
  "O que me fez bem hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
  // propriedade usada por debaixo dos panos no console.log()
  process.stdout.write(questions[index] + " > ")
}

ask();

const answers = [];

process.stdin.on("data", data => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

// fica escutando eventos
process.on("exit", () => {
  console.log(
    ` 
      Muiito bem Jonatas!

      O que voce aprendeu hoje foi:
      ${answers[0]}

      O que voce deixou de fazer e o que você pode melhorar foi:
      ${answers[1]}

      O que te deixou feliz hoje:
      ${answers[2]}

      Voce ajudou ${answers[3]} pessoas hoje!

      Volte amanha para mais!
    `
  )
})
