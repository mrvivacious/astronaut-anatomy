// loader.js

let astronautCountElement = document.getElementById('astronaut_count');
astronautCountElement.innerText = getTotalNumberOfAstronauts();

// age
let ageAveragesObject = getAgeAveragesObject();
let ageAverageAllGroups = ageAveragesObject.averageAge;
let ageAveragesByGroup = ageAveragesObject.averageAgeByGroup;

let ageAverageAllGroupsElement = document.getElementById('age_all_groups')
let ageAveragesByGroupElement = document.getElementById('age_by_group')

ageAverageAllGroupsElement.innerText = ageAverageAllGroups;
ageAveragesByGroupElement.innerText = prettyPrintGroupAverages(ageAveragesByGroup);

function prettyPrintGroupAverages(ageAveragesByGroup) {
  let output = JSON.stringify(ageAveragesByGroup);
  output = output.replaceAll(',', '\n').replaceAll('"', ' ');
  output = output.replace('{', '').replace('}', '');

  return output;
}