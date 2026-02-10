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
          } else if (branch.includes('dubai police')) {
            branch = 'Dubai Police';
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
  
  // Separate US and international branches
  let usAmerican = ['Air Force', 'Navy', 'Army', 'Marines', 'Coast Guard', 'Space Force'];
  let usaStrings = [];
  let internationalStrings = [];
  
  for (let branch in counts.branches) {
    let branchString = `${counts.branches[branch]} ${branch}`;
    
    if (usAmerican.includes(branch)) {
      usaStrings.push(branchString);
    } else {
      internationalStrings.push(branchString);
    }
  }
  
  // Combine USA branches first
  let allBranches = usaStrings;
  
  // Add international branches with label if they exist
  if (internationalStrings.length > 0) {
    allBranches.push('International: ' + internationalStrings.join(', '));
  }
  
  output += allBranches.join(', ') + ').';
  return output;
}
