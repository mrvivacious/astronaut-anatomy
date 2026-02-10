// age.js

function getAgeAveragesObject() {
  let groupNames = getGroupNames();
  console.log(groupNames)

  let totalAgeSum = 0;
  let averageAgeByGroup = {};
  let astronautCounter = 0;

  for (let i = 0; groupNames[i]; i++) {
    let currentName = groupNames[i];
    let group = getGroup(currentName);
    let groupAstronauts = group.astronauts;
    let groupAgeSum = 0;

    for (let j = 0; groupAstronauts[j]; j++) {
      let astronaut = groupAstronauts[j];
      let astronautAge = astronaut.age_at_selection

      groupAgeSum += astronautAge
      astronautCounter++
    }

    totalAgeSum += groupAgeSum;
    averageAgeByGroup[currentName] = (groupAgeSum / groupAstronauts.length).toFixed(2);
  }

  let averageAge = (totalAgeSum / astronautCounter).toFixed(2);

  return {
    averageAge: averageAge,
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