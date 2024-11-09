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
    



    //Task for Map age 
const userName2 = prompt ('enter your name') ?? 'islom'
const userAge2 = prompt ('enter your age') ?? '25'

const myMap5 = new Map();
myMap5.set('firstname', userName2);
myMap5.set('age', userAge2);

if (myMap5.get("age") >= 18) {
    console.log(`${myMap5.get('firstname')} siz 18yoshdan kattasiz`);
} else {

}



//User Finding with ID
const employeeDirectory = new Map([
    [101, { name: "John Doe", department: "Marketing" }],
    [102, { name: "Emily Clark", department: "Finance" }],
    [103, { name: "Jane Smith", department: "Engineering" }],
    [104, { name: "Mike Johnson", department: "IT" }],
    [105, { name: "Anna Brown", department: "HR" }]
    ]);

function findUser(id) {
    if (employeeDirectory.has(id)) {
        let userInfos = employeeDirectory.get(id)
        console.log(`name: ${userInfos.name} and department: ${userInfos.department}`);
    }
    else{
        console.log('topilmadi');
        
    }
}

findUser(104)