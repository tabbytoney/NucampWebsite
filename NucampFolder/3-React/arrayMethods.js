// array.map() review. Doesn't change the original array

// const names = ['ann', 'bob', 'john'];
// const bigNames = names.map((name) => name.toUpperCase());
// console.log(bigNames);

// Array.filter()
// Array.filter() doesnt change original data either. Take a callback function as an argument.
// Iterates over an array and returns a new array without changing the original array.
// const newArray = Array.filter(callbackFn);

// Array.find() Takes a callback function as an argument. Iterates over an array and returns just one
// element without changing the original array
// const value = Array.find(callbackFn);

const things = [
  {
    id: 0,
    title: 'whiskers on kittens',
    favorite: true,
    points: 97,
  },
  {
    id: 1,
    title: 'raindrops on roses',
    favorite: true,
    points: 77,
  },
  {
    id: 2,
    title: 'brown paper packages tied up with string',
    favorite: true,
    points: 87,
  },
  {
    id: 3,
    title: 'dog bite',
    favorite: false,
    featured: 'true',
    points: 12,
  },
  {
    id: 4,
    title: 'bee sting',
    favorite: false,
    points: 6,
  },
];

// array.filter()

// want a new array with just items that have favorites = true

// this callback function can also be called a testing function since it tests all the items to see which meet the criteria
// If curly braces dont exist, it will always return the value of the function

// One way to write it:
// const myFavoriteThings = things.filter((thing) => thing.favorite === true);

// Shortest way to write it
// const myFavoriteThings = things.filter((thing) => thing.favorite);
// // new array is thing
// console.log(myFavoriteThings);

// const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);
// console.log(thingsWithOverFiftyPoints);

// array.find()
// In the array, it finds the first thing that would return true from the function and returns that element and stops looking.
// this example is just using it as a return from a function id, but it can be used standalone like .filter() above

const selectThingById = (id) => {
  return things.filter((thing) => thing.id === id);
};

const selectedThing = selectThingById(4);
console.log(selectedThing);
