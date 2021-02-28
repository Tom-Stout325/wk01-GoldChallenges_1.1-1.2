/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS


let otherGuys = {
    nameOfMovie: 'The Other Guys',
    genre: 'Comedy',
    runTime: '1hr 47min'
}

let characters = [
'Mark Wahlberg', 
'Age:49', 
role = {
1: 'Director',
2: 'Actor'},

'Will Ferrell',
'Age: 54',
role2 = {
1: 'Producer',
2: 'Actor'},
];





console.log(otherGuys.nameOfMovie);
console.log(otherGuys.genre);
console.log(otherGuys.runTime);
console.log(characters);
console.log(characters[0]);
console.log(role[1]);
console.log(characters[3]);
console.log(role2[2]);
