function displayPeopleList(people) {
  people.forEach(person => {
    console.log(`${person.name}`);
  });
}

module.exports = displayPeopleList;