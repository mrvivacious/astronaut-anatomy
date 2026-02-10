// stats.js

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
  let degreeOrder = ['PhD', 'MD', 'MS', 'MEd', 'MPhil', 'MSc', 'MPH', 'Executive Master\'s', 'BS', 'BEng'];
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

function getMilitaryCounts() {
  let militaryBranches = {};
  let civilianCount = 0;
  let militaryTotalCount = 0;
  let groupNames = getGroupNames();

  for (let i = 0; i < groupNames.length; i++) {
    let group = getGroup(groupNames[i]);
    let astronauts = group.astronauts;

    for (let j = 0; j < astronauts.length; j++) {
      let militaryExp = astronauts[j].military_experience;

      if (!militaryExp || militaryExp === null) {
        civilianCount++;
      } else {
        militaryTotalCount++;
        // Parse military branches - some have multiple branches
        let branches = militaryExp.split(/[,;]/);
        for (let k = 0; k < branches.length; k++) {
          let branch = branches[k].trim().toLowerCase();
          
          // Normalize branch names
          if (branch.includes('air force') || branch.includes('usaf')) {
            branch = 'Air Force';
          } else if (branch.includes('navy') || branch.includes('usn')) {
            branch = 'Navy';
          } else if (branch.includes('army') || branch.includes('usa ')) {
            branch = 'Army';
          } else if (branch.includes('marine') || branch.includes('usmc') || branch.includes('usmcr')) {
            branch = 'Marines';
          } else if (branch.includes('coast guard')) {
            branch = 'Coast Guard';
          } else if (branch.includes('space force')) {
            branch = 'Space Force';
          } else if (branch.includes('canadian') || branch.includes('rcaf')) {
            branch = 'Royal Canadian Air Force';
          } else if (branch.includes('self defense')) {
            branch = 'Japan Air Self Defense Force';
          }

          if (militaryBranches[branch]) {
            militaryBranches[branch]++;
          } else {
            militaryBranches[branch] = 1;
          }
        }
      }
    }
  }

  return {
    civilian: civilianCount,
    military: militaryTotalCount,
    branches: militaryBranches
  };
}

function formatMilitaryCounts() {
  let counts = getMilitaryCounts();
  let output = `${counts.civilian} Civilian${counts.civilian !== 1 ? 's' : ''}. ${counts.military} Military (`;
  
  let branchStrings = [];
  for (let branch in counts.branches) {
    branchStrings.push(`${counts.branches[branch]} ${branch}`);
  }
  
  output += branchStrings.join(', ') + ').';
  return output;
}

// Populate the elements
let degreesElement = document.getElementById('degree_counts');
let militaryElement = document.getElementById('military_counts');

if (degreesElement) {
  degreesElement.innerText = formatDegreeCounts();
}

if (militaryElement) {
  militaryElement.innerText = formatMilitaryCounts();
}
