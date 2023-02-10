/*
count number of same values in array
*/
let wizards = [
  "Gandalf",
  "Radgast",
  "Ursula",
  "Radagast",
  "Merlin",
  "Ursula",
  "Ursula",
];

function howManyWizards(arr) {
  let wizardCount = arr.reduce(function (obj, wizard) {
    //console.log(wizard);
    // If the item already doesn't exist yet, create it
    if (!obj[wizard]) {
      obj[wizard] = 0;
    }

    // Increase its value by 1
    obj[wizard]++;

    return obj;
  }, {});
  return wizardCount;
}

console.log(howManyWizards(wizards));
