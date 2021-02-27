/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS


let nameOfMovie = {
    name: 'The Other Guys',
    genre: 'Comedy',
    runTime: '1hr 47min',
    stars: {
        actor1: {
            name1: 'Mark Wahlberg',
            age1: 'Age: 49',
            roles1: ['Director', 'Actor'],
                },
        actor2: {
                name2: 'Will Ferrell',
                age2: 'Age: 54',
                roles2: ['Producer', 'Actor'],
                }
            
            }
}


console.log(nameOfMovie.name);
console.log(nameOfMovie.genre);
console.log(nameOfMovie.runTime);
console.log(nameOfMovie.stars.actor1.name1);
console.log(nameOfMovie.stars.actor1.roles1[0]);
console.log(nameOfMovie.stars.actor1.roles1[1]);
console.log(nameOfMovie.stars.actor2.name2);
console.log(nameOfMovie.stars.actor2.roles2[0]);
console.log(nameOfMovie.stars.actor2.roles2[1]);
