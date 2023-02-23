// criacao de eventos
const { EventEmitter } = require("events");

const event = new EventEmitter();

// ouvir os eventos
event.on('Bye', (message) => {
  console.log(`Eu te ouvi ${message}!`)
});

// ouve um evento uma unica vez
event.once('Bye', (message) => {
  console.log(`Eu te ouvi ${message}!`)
});

// emitir eventos
event.emit('Bye', "Jonatas");
