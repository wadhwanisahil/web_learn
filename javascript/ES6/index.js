//function
// function sayhello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// sayhello();
// object within function
// let person = {
//   name: "sahil",
//   walk() {},
//   talk() {},
// };
// console.log(person.name);
// console.log(person.walk());
// person.name = "kumar";
// console.log(person.name);
// person["name"] = "k";
// console.log(person.name);
// const targetmember = "name";
// person[targetmember] = "find me";
// console.log(person.name);
// person[targetmember.value] = "find me";
// console.log(person.name);
//within the obj the function
// const person = {
//   name: "sahil",
//   walk() {
//     console.log(this);
//   },
//   talk() {},
// };
const num = (num) => num * num;
console.log(num(5));
