const messages = [
  "how are you doing",
  "what are you up to",
  "would you like to get a bite later",
];

// const sweetMessages = [
//     'how are you doing, sweetie?',
//     'what are you up to, sweetie?',
//     'would you like to get a bite later, sweetie?',
// ];

// transform an array of messages into an array of sweet messages

//const sweetMessage = `${messages[0]}, sweetie?`

// imperative way to do it
// const sweetMessages = [];
// for (let i = 0; i < messages.length; i++) {
//   const newMessage = `${messages[i]}, sweetie?`;
//   sweetMessages.push(newMessage);
// }

// console.log(sweetMessages); // prints all the messages with sweetie? added.

// Declarative way to do it - array.map()
const sweetMessages = messages.map((message) => `${message}, sweetie?`);

console.log(sweetMessages);
