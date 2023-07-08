const names = ["Guadalupe", "Ollie", "Aki"]

const messages = []

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}


let number = 10;

function countDown(number) {
  while (number >= 0) {
    console.log(number);
      (number--)
}}

