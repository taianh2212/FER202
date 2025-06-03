// app.js

const displayPerson = require("./DisplayPerson");
const displayPeopleList = require("./PeopleList");
const displayPeopleTable = require("./PeopleTable");
const findFirstTeenager = require("./FirstTeenager");
const areAllTeenagers = require("./AreAllTeenagers");
const sortPeople = require("./SortPeople");
const groupByOccupation = require("./GroupByOccupation");
const findOldestAndYoungest = require("./OldestYoungest");
const averageAgeByOccupation = require("./AverageAgeByOccupation");

const people = [
  { name: "Alice", age: 17, occupation: "Student" },
  { name: "Bob", age: 25, occupation: "Developer" },
  { name: "Charlie", age: 15, occupation: "Student" },
  { name: "David", age: 32, occupation: "Developer" },
  { name: "Eve", age: 29, occupation: "Designer" }
];

// Exercise 3
console.log("Exercise 3: Display a person's details (Alice)");
displayPerson(people[0]);

// Exercise 4
console.log("\nExercise 4: Display list of people");
displayPeopleList(people);

// Exercise 5
console.log("\nExercise 5: Display table of people");
displayPeopleTable(people);

// Exercise 6
console.log("\nExercise 6: Find the first teenager");
const firstTeen = findFirstTeenager(people);
console.log(firstTeen);

// Exercise 7
console.log("\nExercise 7: Are all teenagers?");
console.log(areAllTeenagers(people));

// Exercise 8
console.log("\nExercise 8: Sort by occupation and age");
const sorted = sortPeople(people);
displayPeopleTable(sorted);

// Exercise 9
console.log("\nExercise 9: Group people by occupation");
const grouped = groupByOccupation(people);
console.log(grouped);

// Exercise 9 Bonus: Oldest and youngest
console.log("\nExercise 9 Bonus: Oldest and Youngest");
const { oldest, youngest } = findOldestAndYoungest(people);
console.log("Oldest:", oldest);
console.log("Youngest:", youngest);

// Exercise 10
console.log("\nExercise 10: Average age by occupation");
const averages = averageAgeByOccupation(people);
console.log(averages);
