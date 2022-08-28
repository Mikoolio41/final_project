// user and password
// regex

let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// let testEmails = [
//   "notanemail.com",
//   "workingexample@email.com",
//   "another_working@somethingelse.org",
//   "notworking@1.com",
// ];

// testEmails.forEach((address) => {
//   console.log(regexEmail.test(address));
// });

let regexPass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}$");

// let testPass = ["mika345", "Ha489!@-fsdkjf", "Gyhfdkd398402", "fjdsjhO934?$"];

// testPass.forEach((pass) => {
//   console.log(regexPass.test(pass));
// });
