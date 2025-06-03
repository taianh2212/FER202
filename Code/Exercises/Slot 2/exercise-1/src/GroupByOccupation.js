function groupByOccupation(people) {
  return people.reduce((acc, person) => {
    if (!acc[person.occupation]) acc[person.occupation] = [];
    acc[person.occupation].push(person);
    return acc;
  }, {});
}

module.exports = groupByOccupation;