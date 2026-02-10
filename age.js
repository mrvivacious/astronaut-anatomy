// age.js

function getAgeAveragesObject() {
  let groupNames = getGroupNames();
  let averageAgeByGroup = {};
  let totalAgeSum = 0;
  let groupCount = 0;

  for (let i = 0; groupNames[i]; i++) {
    let groupName = groupNames[i];
    let group = getGroup(groupName);
    averageAgeByGroup[groupName] = group.average_age_of_astronauts;
    totalAgeSum += group.average_age_of_astronauts;
    groupCount++;
  }

  let overallAverageAge = (totalAgeSum / groupCount).toFixed(2);

  return {
    averageAge: overallAverageAge,
    averageAgeByGroup: averageAgeByGroup
  }
}

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