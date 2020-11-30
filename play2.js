const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi I am ' + this.name);
    }
};

// deconstruction this can be done by some third party 
// not neccesasarly has to stick with the original one 
// const printName = (personData) => {
// console.log(personData.name);
// };

// printName(person);
const printName = ({name}) => {
    console.log(name);
    };
    
    printName(person);
// or can be re-write it as for destructuring
    const {name, age} = person;
    console.log(name, age);


// // spread operator
// const copiedPerson = {...person};
// // console.log(person.name + person.age);
// console.log(copiedPerson);

// const hobbies = ['Sports', 'Cookies'];
// // one way of getting all the elementes inside an array
// // for (let hobby of hobbies){
// //     console.log(hobby);
// // }

// // another way of rewriting 
// // console.log(hobbies.map(hobby => ' Hobby ' + hobby));
// //  console.log(hobbies);

// // another way of rewriting but not quite the same output
// // const copiedArray = hobbies.slice();

// // spread operator
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// // the listing operator but not flexible like the following one

// // const toArray1 = (arg1, arg2, arg3) =>{
// //     return [arg1, arg2, arg3];
// // };
// // console.log(toArray1(1, 2, 3));

// // or the rest operator
// const toArray = (...args) => {
//     return args;
// };
// console.log(toArray(1, 2, 3, 4));

