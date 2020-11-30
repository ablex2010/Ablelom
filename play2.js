const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi I am ' + this.name);
    }
};
// spread operator
const copiedPerson = {...person};
// console.log(person.name + person.age);
console.log(copiedPerson);

const hobbies = ['Sports', 'Cookies'];
// one way of getting all the elementes inside an array
// for (let hobby of hobbies){
//     console.log(hobby);
// }

// another way of rewriting 
// console.log(hobbies.map(hobby => ' Hobby ' + hobby));
//  console.log(hobbies);

// another way of rewriting but not quite the same output
// const copiedArray = hobbies.slice();

// spread operator
const copiedArray = [...hobbies];
console.log(copiedArray);
