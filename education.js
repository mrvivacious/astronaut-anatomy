function getDegreeCounts() {
  let degreeCounts = {};
  let groupNames = getGroupNames();

  for (let i = 0; i < groupNames.length; i++) {
    let group = getGroup(groupNames[i]);
    let astronauts = group.astronauts;

    for (let j = 0; j < astronauts.length; j++) {
      let degree = astronauts[j].highest_degree;
      if (degreeCounts[degree]) {
        degreeCounts[degree]++;
      } else {
        degreeCounts[degree] = 1;
      }
    }
  }

  return degreeCounts;
}

function formatDegreeCounts() {
  let degreeCounts = getDegreeCounts();
  let degreeOrder = ['PhD', 'MD', 'MS', 'MEd', 'MPhil', 'MSc', 'MPH', 'EMPA', 'BS', 'BEng'];
  let output = [];

  for (let i = 0; i < degreeOrder.length; i++) {
    let degree = degreeOrder[i];
    if (degreeCounts[degree]) {
      let label = degree;
      if (degreeCounts[degree] > 1 && degree === 'PhD') {
        label = 'PhDs';
      } else if (degreeCounts[degree] > 1 && degree === 'MD') {
        label = 'MDs';
      }
      output.push(`${degreeCounts[degree]} ${label}`);
    }
  }

  return output.join('. ') + '.';
}