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



//Exercise Map
    const myMap1 = new Map();
    myMap1.set('firstname', 'Ulugbek');
    myMap1.set('lastname', 'Samigjonov');
    myMap1.set('age', 25);
    
    console.log(myMap1);
    // console.log(myMap.has("firstname"));
    myMap1.delete("firstname");
    console.log(myMap1);
    