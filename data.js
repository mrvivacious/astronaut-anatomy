// data.js
//
// full astronaut name: string
// sex: string m/f/x
// date of birth: string
// nationality: string
// military status: string
// title: string
// year of selection program: number
// missions participated in: [string]

// current focus: nasa
let nasa = {
  "astronaut_groups": {
    "group_23": {
      "selection_year": 2021,
      "applications_received": 12000,
      "astronauts": [
        {
          "name": "Nichole Ayers",
          "age_at_selection": 33,
          "highest_degree": "MS",
          "education": "Rice University",
          "military_experience": "USAF",
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Marcos Berrios",
          "age_at_selection": 37,
          "highest_degree": "PhD",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Chris Birch",
          "age_at_selection": 35,
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Deniz Burnham",
          "age_at_selection": 36,
          "highest_degree": "MS",
          "education": "USC",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Luke Delaney",
          "age_at_selection": 42,
          "highest_degree": "MS",
          "education": "Naval Postgraduate School",
          "military_experience": "USMC",
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Andre Douglas",
          "age_at_selection": 36,
          "highest_degree": "PhD",
          "education": "George Washington University",
          "military_experience": "US Coast Guard",
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Jack Hathaway",
          "age_at_selection": 39,
          "highest_degree": "MS",
          "education": "Cranfield University; Naval War College",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Anil Menon",
          "age_at_selection": 45,
          "highest_degree": "MD",
          "education": "Stanford University; UT Medical Branch",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Christopher L. Williams",
          "age_at_selection": 38,
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Jessica Wittner",
          "age_at_selection": 38,
          "highest_degree": "MS",
          "education": "Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Nora Al Matrooshi",
          "age_at_selection": 28,
          "highest_degree": "BS",
          "education": "UAE University",
          "military_experience": null,
          "nationality": "UAE",
          "is_international": true
        },
        {
          "name": "Mohammed Al Mulla",
          "age_at_selection": 33,
          "highest_degree": "Executive Master's",
          "education": "Mohammed Bin Rashid School of Government",
          "military_experience": "Dubai Police",
          "nationality": "UAE",
          "is_international": true
        }
      ]
    },

    "group_22": {
      "selection_year": 2017,
      "applications_received": 18300,
      "astronauts": [
        {
          "name": "Kayla Barron",
          "age_at_selection": 30,
          "highest_degree": "MPhil",
          "education": "Peterhouse, Cambridge",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Zena Cardman",
          "age_at_selection": 30,
          "highest_degree": "MS",
          "education": "UNC Chapel Hill",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false
        },
        {
          "name": "Raja Chari",
          "age_at_selection": 40,
          "highest_degree": "MS",
          "education": "MIT",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false
        }
        /* remaining group_22 entries would continue identically */
      ]
    },

    "group_21": {
      "selection_year": 2013,
      "applications_received": 6300,
      "astronauts": [
        {
          "name": "Josh A. Cassada",
          "age_at_selection": 40,
          "highest_degree": "PhD",
          "education": "University of Rochester",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false
        }
        /* remaining group_21 entries */
      ]
    },

    "group_20": {
      "selection_year": 2009,
      "applications_received": null,
      "astronauts": [
        {
          "name": "Kathleen Rubins",
          "age_at_selection": 31,
          "highest_degree": "PhD",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false
        }
        /* remaining group_20 entries */
      ]
    },

    "group_19": {
      "selection_year": 2004,
      "applications_received": null,
      "astronauts": [
        {
          "name": "Christopher Cassidy",
          "age_at_selection": 34,
          "highest_degree": "MS",
          "education": "MIT",
          "military_experience": "US Navy SEAL",
          "nationality": "USA",
          "is_international": false
        }
        /* remaining group_19 entries */
      ]
    }
  }
}

function getGroupNames() {
  let groupsObject = nasa.astronaut_groups;
  let groupNames = Object.keys(groupsObject);
  return groupNames;
}

function getGroup(groupName) {
  return nasa.astronaut_groups[groupName];
}