const student = {
    firstName: "Junaid",
    lastName: "Dharejo",
    age: 19,
    address: {
        country: "Pakistan",
        district: "Khairpur",
        city: "Pir jo goth"
    },
    education: "Undergraduate"
}

// const city = student.address.city;
// const city = student["address"]["city"];

const age = student["age"];

console.log(age);