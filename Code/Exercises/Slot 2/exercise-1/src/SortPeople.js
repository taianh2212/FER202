function sortPeople(people) {
  return people.slice().sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });
}

module.exports = sortPeople;