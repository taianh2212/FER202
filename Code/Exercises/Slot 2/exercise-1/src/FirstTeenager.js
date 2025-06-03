function findFirstTeenager(people) {
  return people.find(person => person.age >= 13 && person.age <= 19);
}

module.exports = findFirstTeenager;
