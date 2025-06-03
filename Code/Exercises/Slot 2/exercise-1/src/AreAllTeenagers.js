function areAllTeenagers(people) {
  return people.every(person => person.age >= 13 && person.age <= 19);
}

module.exports = areAllTeenagers;
