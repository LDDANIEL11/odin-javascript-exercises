function getAge(death, birth) {
  if (!death) {
    death = new Date().getFullYear();
    //date function !(maybe library , i dunno)
  }
  return death - birth;
}

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = getAge(
      currentPerson.yearOfDeath,
      currentPerson.yearOfBirth
    );
    return currentAge > oldestAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
