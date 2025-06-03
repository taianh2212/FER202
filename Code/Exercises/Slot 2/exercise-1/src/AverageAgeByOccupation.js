function averageAgeByOccupation(people) {
  const grouped = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = { totalAge: 0, count: 0 };
    }
    acc[person.occupation].totalAge += person.age;
    acc[person.occupation].count++;
    return acc;
  }, {});

  const averages = {};
  for (const occupation in grouped) {
    averages[occupation] = grouped[occupation].totalAge / grouped[occupation].count;
  }
  return averages;
}

module.exports = averageAgeByOccupation;
