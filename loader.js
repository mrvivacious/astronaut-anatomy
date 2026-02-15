// loader.js

let astronautCountElement = document.getElementById('astronaut_count');
if (astronautCountElement) {
  astronautCountElement.innerText = getTotalNumberOfAstronauts();
}

// education
let degreesElement = document.getElementById('degree_counts');
if (degreesElement) {
  degreesElement.innerText = formatDegreeCounts();
}

// military
let militaryElement = document.getElementById('military_counts');
if (militaryElement) {
  militaryElement.innerText = formatMilitaryCounts();
}

// age
let ageAveragesObject = getAgeAveragesObject();
let ageAverageAllGroups = ageAveragesObject.averageAge;
let ageAveragesByGroup = ageAveragesObject.averageAgeByGroup;

let ageAverageAllGroupsElement = document.getElementById('age_all_groups')
let ageAveragesByGroupElement = document.getElementById('age_by_group')

if (ageAverageAllGroupsElement) {
  ageAverageAllGroupsElement.innerText = ageAverageAllGroups;
}

if (ageAveragesByGroupElement) {
  ageAveragesByGroupElement.innerText = prettyPrintGroupAverages(ageAveragesByGroup);
}

function prettyPrintGroupAverages(ageAveragesByGroup) {
  let output = JSON.stringify(ageAveragesByGroup);
  output = output.replaceAll(',', '\n').replaceAll('"', ' ').replaceAll(' :', ': ');
  output = output.replace('{', '').replace('}', '');

  return output;
}