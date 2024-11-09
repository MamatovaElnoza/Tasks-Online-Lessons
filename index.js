const userName = prompt('enter your name');
const userSurname = prompt('enter your surname');
const userAge = prompt('enter your age');

const person = {
    name: userName,
    surname: userSurname,
    age: userAge
}

document.getElementById('text1').innerHTML = person.name;
document.getElementById('text2').innerHTML = person.surname;
document.getElementById('text3').innerHTML = person.age;

//Test for Optional Chaining
const person3 = {
    name: 'Ulugbek',
    age: 25
    };
    const companyName = person3.job?.companyName;
    console.log(companyName);
    console.log(person3.study?.());
    console.log(person3.job);