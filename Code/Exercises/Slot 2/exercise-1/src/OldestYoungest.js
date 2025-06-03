function findOldestAndYoungest(people) {
  if (people.length === 0) return { oldest: null, youngest: null };
  let oldest = people[0];
  let youngest = people[0];

  people.forEach(person => {
    if (person.age > oldest.age) oldest = person;
    if (person.age < youngest.age) youngest = person;
  });

  return { oldest, youngest };
}

module.exports = findOldestAndYoungest;
