// data_history.js - NASA astronaut groups 1-18 (1959-2000), same schema as data.js.
//
// Source: NASA Astronaut Fact Book (2013) via the Kaggle 'NASA Astronaut Yearbook'.
// Covers NASA-selected US astronauts. International candidates attached to Groups 16-18
// and payload specialists are not included. Caveats:
//   * degree levels are not in the source: 'Graduate' = graduate degree, level unspecified
//   * wikipedia_link is a Wikipedia search link (never lands on the wrong person)
//   * group-level fields selection_date and nickname are additions to the data.js schema
export const nasaHistory = {
  "astronaut_groups": {
    "group_18": {
      "selection_year": 2000,
      "selection_date": "2000-07-26",
      "nickname": null,
      "applications_received": null,
      "average_age_of_astronauts": 35.65,
      "astronauts": [
        {
          "name": "Dominic A. Antonelli",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Dominic+A.+Antonelli+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Washington",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "University of Washington",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael R. Barratt",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+R.+Barratt+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Wright State University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Zoology"
              ],
              "category": "Biology",
              "institution": "University of Washington",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Northwestern University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Medicine"
              ],
              "category": "Medicine",
              "institution": "Wright State University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Robert L. Behnken",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Robert+L.+Behnken+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "California Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics & Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Washington University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "California Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Eric A. Boe",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Eric+A.+Boe+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Georgia Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Stephen G. Bowen",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Stephen+G.+Bowen+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Ocean Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Alvin B. Drew Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Alvin+B.+Drew+Jr.+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Embry-Riddle Aeronautical University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Political Science"
              ],
              "category": "Other",
              "institution": "Embry-Riddle Aeronautical University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Andrew J. Feustel",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Andrew+J.+Feustel+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Queen’s University-Canada",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Solid Earth Sciences"
              ],
              "category": "Science",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Geophysics"
              ],
              "category": "Science",
              "institution": "Purdue University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Seismology"
              ],
              "category": "Science",
              "institution": "Queen’s University-Canada",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Kevin A. Ford",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kevin+A.+Ford+astronaut&go=Go",
          "age_at_selection": 40,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Air Force Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Notre Dame",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "International Relations"
              ],
              "category": "Other",
              "institution": "Troy State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Florida",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Air Force Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Ronald J. Garan Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Ronald+J.+Garan+Jr.+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Florida",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Business Economics"
              ],
              "category": "Business",
              "institution": "State University of New York",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics"
              ],
              "category": "Engineering",
              "institution": "Embry-Riddle Aeronautical University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Florida",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael T. Good",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+T.+Good+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Notre Dame",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Notre Dame",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Notre Dame",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Douglas G. Hurley",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Douglas+G.+Hurley+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Tulane University",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Civil Engineering"
              ],
              "category": "Engineering",
              "institution": "Tulane University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Timothy L. Kopra",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Timothy+L.+Kopra+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Army War College",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Computer Science"
              ],
              "category": "Computer Science",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Strategic Studies"
              ],
              "category": "Military Science",
              "institution": "US Army War College",
              "year_completed": null
            }
          ]
        },
        {
          "name": "K. Megan McArthur",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=K.+Megan+McArthur+astronaut&go=Go",
          "age_at_selection": 29,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "University of California-San Diego",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of California-Los Angeles",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Oceanography"
              ],
              "category": "Science",
              "institution": "University of California-San Diego",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Karen L. Nyberg",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Karen+L.+Nyberg+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Texas",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of North Dakota",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Nicole P. Stott",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Nicole+P.+Stott+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "University of Central Florida",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Embry-Riddle Aeronautical University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Management"
              ],
              "category": "Engineering",
              "institution": "University of Central Florida",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Terry W. Virts Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Terry+W.+Virts+Jr.+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Embry-Riddle Aeronautical University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics"
              ],
              "category": "Engineering",
              "institution": "Embry-Riddle Aeronautical University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Barry E. Wilmore",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Barry+E.+Wilmore+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Tennessee",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Tennessee Technological University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Tennessee Technological University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Aviation Systems"
              ],
              "category": "Engineering",
              "institution": "University of Tennessee",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        }
      ]
    },
    "group_17": {
      "selection_year": 1998,
      "selection_date": "1998-06-04",
      "nickname": null,
      "applications_received": null,
      "average_age_of_astronauts": 36.4,
      "astronauts": [
        {
          "name": "Clayton C. Anderson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Clayton+C.+Anderson+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Iowa State University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Hastings College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Iowa State University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Lee J. Archambault",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Lee+J.+Archambault+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Illinois-Urbana",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Illinois-Urbana",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Illinois-Urbana",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Gregory E. Chamitoff",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Gregory+E.+Chamitoff+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "California Polytechnic State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "California Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Timothy J. Creamer",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Timothy+J.+Creamer+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "Loyola College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Tracy Caldwell Dyson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Tracy+Caldwell+Dyson+astronaut&go=Go",
          "age_at_selection": 29,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of California-Davis",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "California State University-Fullerton",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physical Chemistry"
              ],
              "category": "Science",
              "institution": "University of California-Davis",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Christopher J. Ferguson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Christopher+J.+Ferguson+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Drexel University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael J. Foreman",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+J.+Foreman+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael E. Fossum",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+E.+Fossum+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Houston-Clear Lake",
          "military_experience": "US Air Force Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Texas A&M University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Systems Engineering"
              ],
              "category": "Engineering",
              "institution": "Air Force Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physical Science (Space Science)"
              ],
              "category": "Science",
              "institution": "University of Houston-Clear Lake",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kenneth T. Ham",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kenneth+T.+Ham+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Gregory C. Johnson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Gregory+C.+Johnson+astronaut&go=Go",
          "age_at_selection": 44,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Washington",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Washington",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Gregory H. Johnson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Gregory+H.+Johnson+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Texas",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Flight Structures Engineering"
              ],
              "category": "Engineering",
              "institution": "Columbia University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Administration"
              ],
              "category": "Business",
              "institution": "University of Texas",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Stanley G. Love",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Stanley+G.+Love+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Washington",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Harvey Mudd College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronomy"
              ],
              "category": "Science",
              "institution": "University of Washington",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Leland D. Melvin",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Leland+D.+Melvin+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Virginia",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "University of Richmond",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Materials Science Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Virginia",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Barbara R. Morgan",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Barbara+R.+Morgan+astronaut&go=Go",
          "age_at_selection": 47,
          "gender": "female",
          "highest_degree": "BS",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Human Biology"
              ],
              "category": "Biology",
              "institution": "Stanford University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "William A. Oefelein",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+A.+Oefelein+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Tennessee",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Oregon State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aviation Systems"
              ],
              "category": "Engineering",
              "institution": "University of Tennessee",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John D. Olivas",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+D.+Olivas+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Rice University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas-El Paso",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical  Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Houston",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical  Engineering & Materials Science"
              ],
              "category": "Engineering",
              "institution": "Rice University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Nicholas J. M. Patrick",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Nicholas+J.+M.+Patrick+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Cambridge",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Cambridge",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Alan G. Poindexter",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Alan+G.+Poindexter+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Garrett E. Reisman",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Garrett+E.+Reisman+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "California Institute of Technology",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Economics"
              ],
              "category": "Business",
              "institution": "University of Pennsylvania",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical  Engineering"
              ],
              "category": "Engineering",
              "institution": "California Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Patricia Hilliard Robertson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Patricia+Hilliard+Robertson+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "female",
          "highest_degree": "MD",
          "education": "Medical College of Pennsylvania",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Biology"
              ],
              "category": "Biology",
              "institution": "Indiana University of Pennsylvania",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Medical College of Pennsylvania",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Steven R. Swanson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Steven+R.+Swanson+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Texas A&M University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Physics"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Computer Systems"
              ],
              "category": "Computer Science",
              "institution": "Florida Atlantic University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Computer Science"
              ],
              "category": "Computer Science",
              "institution": "Texas A&M University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Douglas H. Wheelock",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Douglas+H.+Wheelock+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Georgia Institute of Technology",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Applied Science & Engineering"
              ],
              "category": "Engineering",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Sunita L. Williams",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Sunita+L.+Williams+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "Florida Institute of Technology",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physical Science"
              ],
              "category": "Science",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Management"
              ],
              "category": "Engineering",
              "institution": "Florida Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Neil W. Woodward III",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Neil+W.+Woodward+III+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "George Washington University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of Texas-Austin",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Management"
              ],
              "category": "Business",
              "institution": "George Washington University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "George D. Zamka",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=George+D.+Zamka+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Florida Institute of Technology",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Management"
              ],
              "category": "Engineering",
              "institution": "Florida Institute of Technology",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_16": {
      "selection_year": 1996,
      "selection_date": "1996-05-01",
      "nickname": "The Sardines",
      "applications_received": null,
      "average_age_of_astronauts": 36.11,
      "astronauts": [
        {
          "name": "David M. Brown",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=David+M.+Brown+astronaut&go=Go",
          "age_at_selection": 40,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Eastern Virginia Medical School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Biology"
              ],
              "category": "Biology",
              "institution": "College of William & Mary",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Eastern Virginia Medical School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Daniel C. Burbank",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Daniel+C.+Burbank+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Embry-Riddle Aeronautical University",
          "military_experience": "US Coast Guard",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Coast Guard Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Science"
              ],
              "category": "Engineering",
              "institution": "Embry-Riddle Aeronautical University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Yvonne D. Cagle",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Yvonne+D.+Cagle+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "female",
          "highest_degree": "BS",
          "education": "San Francisco State University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Biochemistry"
              ],
              "category": "Biology",
              "institution": "San Francisco State University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Fernando Caldeiro",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Fernando+Caldeiro+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Central Florida",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Arizona",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Management"
              ],
              "category": "Engineering",
              "institution": "University of Central Florida",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Charles J. Camarda",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+J.+Camarda+astronaut&go=Go",
          "age_at_selection": 44,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Virginia Polytechnic Institute",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Polytechnic Institute of Brooklyn",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "George Washington University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Virginia Polytechnic Institute",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Duane G. Carey",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Duane+G.+Carey+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Minnesota-Minneapolis",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering & Mechanics"
              ],
              "category": "Engineering",
              "institution": "University of Minnesota-Minneapolis",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Minnesota-Minneapolis",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Laurel B. Clark",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Laurel+B.+Clark+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "female",
          "highest_degree": "MD",
          "education": "University of Wisconsin-Madison",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Zoology"
              ],
              "category": "Biology",
              "institution": "University of Wisconsin-Madison",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "University of Wisconsin-Madison",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "E. Michael Fincke",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=E.+Michael+Fincke+astronaut&go=Go",
          "age_at_selection": 29,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Houston-Clear Lake",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautics & Astronautics",
                "Earth, Atmospheric & Planetary Sciences"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physical Sciences"
              ],
              "category": "Science",
              "institution": "University of Houston-Clear Lake",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Patrick G. Forrester",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Patrick+G.+Forrester+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Virginia",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Applied Science & Engineering"
              ],
              "category": "Engineering",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical & Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Virginia",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Stephen N. Frick",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Stephen+N.+Frick+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John B. Herrington",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+B.+Herrington+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Applied Mathematics"
              ],
              "category": "Mathematics",
              "institution": "University of Colorado",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Joan E. Higginbotham",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Joan+E.+Higginbotham+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "Florida Institute of Technology",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Southern Illinois University-Carbondale",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Management"
              ],
              "category": "Business",
              "institution": "Southern Illinois University-Carbondale",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Space Systems"
              ],
              "category": "Engineering",
              "institution": "Florida Institute of Technology",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Charles O. Hobaugh",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+O.+Hobaugh+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James M. Kelly",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+M.+Kelly+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Alabama",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Alabama",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Mark E. Kelly",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Mark+E.+Kelly+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Marine Engineering & Nautical Science"
              ],
              "category": "Engineering",
              "institution": "US Merchant Marine Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Scott J. Kelly",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Scott+J.+Kelly+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Tennessee-Knoxville",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "State University of New York Maritime College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aviation Systems"
              ],
              "category": "Engineering",
              "institution": "University of Tennessee-Knoxville",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Paul S. Lockhart",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Paul+S.+Lockhart+astronaut&go=Go",
          "age_at_selection": 40,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Texas",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "Texas Tech University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Christopher J. Loria",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Christopher+J.+Loria+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Harvard University",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Public Administration"
              ],
              "category": "Other",
              "institution": "Harvard University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Sandra H. Magnus",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Sandra+H.+Magnus+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "Georgia Institute of Technology",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of Missouri-Rolla",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Missouri-Rolla",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Materials Science & Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Michael J. Massimino",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+J.+Massimino+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Industrial Engineering"
              ],
              "category": "Engineering",
              "institution": "Columbia University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Technology & Policy"
              ],
              "category": "Other",
              "institution": "Columbia University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Richard A. Mastracchio",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Richard+A.+Mastracchio+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Houston-Clear Lake",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering",
                "Computer Science"
              ],
              "category": "Engineering",
              "institution": "University of Connecticut",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Rensselaer Polytechnic Institute",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physical Sciences"
              ],
              "category": "Science",
              "institution": "University of Houston-Clear Lake",
              "year_completed": null
            }
          ]
        },
        {
          "name": "William C. McCool",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+C.+McCool+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Naval Sciences"
              ],
              "category": "Military Science",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Computer Science"
              ],
              "category": "Computer Science",
              "institution": "University of Maryland",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Lee M. Morin",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Lee+M.+Morin+astronaut&go=Go",
          "age_at_selection": 44,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "New York University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematical & Electrical Science"
              ],
              "category": "Mathematics",
              "institution": "University of New Hampshire",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Public Health"
              ],
              "category": "Medicine",
              "institution": "University of New Hampshire",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Biochemistry"
              ],
              "category": "Biology",
              "institution": "University of New Hampshire",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "University of Alabama-Birmingham",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Microbiology"
              ],
              "category": "Biology",
              "institution": "New York University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Lisa M. Nowak",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Lisa+M.+Nowak+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Donald R. Pettit",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Donald+R.+Pettit+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Arizona",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemical Engineering"
              ],
              "category": "Engineering",
              "institution": "Oregon State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Chemical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Arizona",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John L. Phillips",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+L.+Phillips+astronaut&go=Go",
          "age_at_selection": 45,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of California-Los Angeles",
          "military_experience": "US Navy Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics",
                "Russian"
              ],
              "category": "Mathematics",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Systems"
              ],
              "category": "Engineering",
              "institution": "University of West Florida",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Geophysics & Space Physics"
              ],
              "category": "Science",
              "institution": "University of California-Los Angeles",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Mark L. Polansky",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Mark+L.+Polansky+astronaut&go=Go",
          "age_at_selection": 40,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Purdue University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Paul W. Richards",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Paul+W.+Richards+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Maryland",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Drexel University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Maryland",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Piers J. Sellers",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Piers+J.+Sellers+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Leeds University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Ecological Science"
              ],
              "category": "Biology",
              "institution": "University of Edinburgh",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Biometeorology"
              ],
              "category": "Science",
              "institution": "Leeds University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Heidemarie M. Stefanyshyn-Piper",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Heidemarie+M.+Stefanyshyn-Piper+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "BS",
          "education": "MIT",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Daniel M. Tani",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Daniel+M.+Tani+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Rex J. Walheim",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Rex+J.+Walheim+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Houston",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of California-Berkeley",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Industrial Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Houston",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Peggy A. Whitson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Peggy+A.+Whitson+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "Rice University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry & Biology"
              ],
              "category": "Biology",
              "institution": "Iowa Wesleyan College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Biochemistry"
              ],
              "category": "Biology",
              "institution": "Rice University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Jeffrey N. Williams",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Jeffrey+N.+Williams+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval War College",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Applied Science & Engineering"
              ],
              "category": "Engineering",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "National Security & Strategic Studies"
              ],
              "category": "Military Science",
              "institution": "US Naval War College",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Stephanie D. Wilson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Stephanie+D.+Wilson+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "University of Texas",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "Harvard University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_15": {
      "selection_year": 1994,
      "selection_date": "1994-12-08",
      "nickname": "The Flying Escargot",
      "applications_received": null,
      "average_age_of_astronauts": 35.16,
      "astronauts": [
        {
          "name": "Susan L. Kilrain (Still)",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Susan+L.+Kilrain+%28Still%29+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "Georgia Institute of Technology",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Embry-Riddle University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Scott D. Altman",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Scott+D.+Altman+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Illinois",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael P. Anderson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+P.+Anderson+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Creighton University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics & Astronomy"
              ],
              "category": "Science",
              "institution": "University of Washington",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Creighton University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Jeffrey S. Ashby",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Jeffrey+S.+Ashby+astronaut&go=Go",
          "age_at_selection": 40,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Tennessee",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Idaho",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aviation Systems"
              ],
              "category": "Engineering",
              "institution": "University of Tennessee",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael J. Bloomfield",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+J.+Bloomfield+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Old Dominion University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Mechanics"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Management"
              ],
              "category": "Engineering",
              "institution": "Old Dominion University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kalpana Chawla",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kalpana+Chawla+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Colorado",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Punjab Engineering College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Robert L. Curbeam Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Robert+L.+Curbeam+Jr.+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Joe F. Edwards Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Joe+F.+Edwards+Jr.+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Tennessee-Knoxville",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aviation Systems"
              ],
              "category": "Engineering",
              "institution": "University of Tennessee-Knoxville",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Dominic L. Gorie",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Dominic+L.+Gorie+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Tennessee",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Ocean Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aviation Systems"
              ],
              "category": "Engineering",
              "institution": "University of Tennessee",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kathryn P. Hire",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kathryn+P.+Hire+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "Florida State Institute of Technology",
          "military_experience": "US Navy Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Management"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Space Technology"
              ],
              "category": "Engineering",
              "institution": "Florida State Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Rick D. Husband",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Rick+D.+Husband+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "California State University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Texas Tech University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "California State University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Janet L. Kavandi",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Janet+L.+Kavandi+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Washington",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "Missouri Southern State College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "University of Washington",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Steven W. Lindsey",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Steven+W.+Lindsey+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Air Force Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Edward T. Lu",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Edward+T.+Lu+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Cornell University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Applied Physics"
              ],
              "category": "Physics",
              "institution": "Stanford University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Pamela A. Melroy",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Pamela+A.+Melroy+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics & Astronomy"
              ],
              "category": "Science",
              "institution": "Wellesley College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Earth & Planetary Sciences"
              ],
              "category": "Science",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Carlos I. Noriega",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Carlos+I.+Noriega+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Computer Science"
              ],
              "category": "Computer Science",
              "institution": "University of Southern California",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Computer Science"
              ],
              "category": "Computer Science",
              "institution": "University of Southern California",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Space Systems Operations"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "James F. Reilly II",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+F.+Reilly+II+astronaut&go=Go",
          "age_at_selection": 40,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Texas-Dallas",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Geosciences"
              ],
              "category": "Science",
              "institution": "University of Texas-Dallas",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Geosciences"
              ],
              "category": "Science",
              "institution": "University of Texas-Dallas",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Stephen K. Robinson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Stephen+K.+Robinson+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical & Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of California-Davis",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical  Engineering"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Frederick W. Sturckow",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Frederick+W.+Sturckow+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "BS",
          "education": "California Polytechnic State University",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "California Polytechnic State University",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_14": {
      "selection_year": 1992,
      "selection_date": "1992-03-31",
      "nickname": "The Hogs",
      "applications_received": null,
      "average_age_of_astronauts": 35.89,
      "astronauts": [
        {
          "name": "Daniel T. Barry",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Daniel+T.+Barry+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Miami",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Cornell University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Cornell University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Computer Science"
              ],
              "category": "Computer Science",
              "institution": "Princeton University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "University of Miami",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Charles E. Brady Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+E.+Brady+Jr.+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Duke University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "University of North Carolina at Chapel Hill",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Duke University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Catherine G. Coleman",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Catherine+G.+Coleman+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Massachusetts",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Polymer Science & Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Massachusetts",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael L. Gernhardt",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+L.+Gernhardt+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Pennsylvania",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Vanderbilt University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Bioengineering"
              ],
              "category": "Engineering",
              "institution": "University of Pennsylvania",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John M. Grunsfeld",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+M.+Grunsfeld+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Chicago",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of Chicago",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Scott J. Horowitz",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Scott+J.+Horowitz+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Georgia Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "California State University-Northridge",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Brent W. Jett",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Brent+W.+Jett+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kevin R. Kregel",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kevin+R.+Kregel+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Troy State University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Public Administration"
              ],
              "category": "Other",
              "institution": "Troy State University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Wendy B. Lawrence",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Wendy+B.+Lawrence+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Ocean Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Ocean Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Jerry M. Linenger",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Jerry+M.+Linenger+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Wayne State University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Bioscience"
              ],
              "category": "Biology",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Systems Management"
              ],
              "category": "Business",
              "institution": "US Naval Academy",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Public Health"
              ],
              "category": "Medicine",
              "institution": "University of Southern California",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "University of North Carolina",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Epidemiology"
              ],
              "category": "Medicine",
              "institution": "Wayne State University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Richard M. Linnehan",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Richard+M.+Linnehan+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "DVM",
          "education": "Harvard University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Animal Science"
              ],
              "category": "Biology",
              "institution": "University of New Hampshire",
              "year_completed": null
            },
            {
              "level": "DVM",
              "fields": [
                "Veterinary Medicine"
              ],
              "category": "Medicine",
              "institution": "Ohio State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Public Administration"
              ],
              "category": "Other",
              "institution": "Harvard University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael E. Lopez-Alegria",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+E.+Lopez-Alegria+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Systems Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Scott E. Parazynski",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Scott+E.+Parazynski+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Biology"
              ],
              "category": "Biology",
              "institution": "Stanford University",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Stanford University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Kent V. Rominger",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kent+V.+Rominger+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Civil Engineering"
              ],
              "category": "Engineering",
              "institution": "Colorado State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Winston E. Scott",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Winston+E.+Scott+astronaut&go=Go",
          "age_at_selection": 42,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Music"
              ],
              "category": "Other",
              "institution": "Florida State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Steven L. Smith",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Steven+L.+Smith+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Joseph R. Tanner",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Joseph+R.+Tanner+astronaut&go=Go",
          "age_at_selection": 42,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Illinois",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Illinois",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Andrew S. W. Thomas",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Andrew+S.+W.+Thomas+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Adelaide",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Adelaide",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Adelaide",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Mary E. Weber",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Mary+E.+Weber+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "University of California-Berkeley",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physical Chemistry"
              ],
              "category": "Science",
              "institution": "University of California-Berkeley",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_13": {
      "selection_year": 1990,
      "selection_date": "1990-01-17",
      "nickname": "The Hairballs",
      "applications_received": null,
      "average_age_of_astronauts": 34.7,
      "astronauts": [
        {
          "name": "Daniel W. Bursch",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Daniel+W.+Bursch+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Leroy Chiao",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Leroy+Chiao+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of California-Santa Barbara",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of California-Berkeley",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Chemical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of California-Santa Barbara",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael R. Clifford",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+R.+Clifford+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Georgia Institute of Technology",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kenneth D. Cockrell",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kenneth+D.+Cockrell+astronaut&go=Go",
          "age_at_selection": 40,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of West Florida",
          "military_experience": "US Navy Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Systems"
              ],
              "category": "Engineering",
              "institution": "University of West Florida",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Eileen M. Collins",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Eileen+M.+Collins+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "Webster University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics & Economics"
              ],
              "category": "Mathematics",
              "institution": "Syracuse University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Operations Research"
              ],
              "category": "Mathematics",
              "institution": "Stanford University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Space Systems Management"
              ],
              "category": "Engineering",
              "institution": "Webster University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Nancy J. Currie",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Nancy+J.+Currie+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Houston",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Biological Science"
              ],
              "category": "Biology",
              "institution": "Ohio State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Safety Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Southern California",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Industrial Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Houston",
              "year_completed": null
            }
          ]
        },
        {
          "name": "William G. Gregory",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+G.+Gregory+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Troy State University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Mechanics"
              ],
              "category": "Engineering",
              "institution": "Columbia University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Management"
              ],
              "category": "Business",
              "institution": "Troy State University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James D. Halsell Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+D.+Halsell+Jr.+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Air Force Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Management"
              ],
              "category": "Business",
              "institution": "Troy State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Space Operations"
              ],
              "category": "Engineering",
              "institution": "US Air Force Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Bernard A. Harris Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Bernard+A.+Harris+Jr.+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Texas Tech University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Biology"
              ],
              "category": "Biology",
              "institution": "University of Houston",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Texas Tech University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Susan J. Helms",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Susan+J.+Helms+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "Stanford University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Thomas D. Jones",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Thomas+D.+Jones+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Arizona",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Planetary Science"
              ],
              "category": "Science",
              "institution": "University of Arizona",
              "year_completed": null
            }
          ]
        },
        {
          "name": "William S. McArthur Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+S.+McArthur+Jr.+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Georgia Institute of Technology",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Applied Science & Engineering"
              ],
              "category": "Engineering",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James H. Newman",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+H.+Newman+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Rice University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Dartmouth College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Rice University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Ellen Ochoa",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Ellen+Ochoa+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "San Diego State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Charles J. Precourt",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+J.+Precourt+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval War College",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Management"
              ],
              "category": "Engineering",
              "institution": "Golden Gate University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Strategic Studies"
              ],
              "category": "Military Science",
              "institution": "US Naval War College",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Richard A. Searfoss",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Richard+A.+Searfoss+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "California Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics"
              ],
              "category": "Engineering",
              "institution": "California Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Ronald M. Sega",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Ronald+M.+Sega+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Colorado",
          "military_experience": "US Air Force Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics & Mathematics"
              ],
              "category": "Physics",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Ohio State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Donald A. Thomas",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Donald+A.+Thomas+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Cornell University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Case Western Reserve University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Materials Science"
              ],
              "category": "Science",
              "institution": "Cornell University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Janice E. Voss",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Janice+E.+Voss+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Carl E. Walz",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Carl+E.+Walz+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "John Carroll University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Kent State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Solid State Physics"
              ],
              "category": "Physics",
              "institution": "John Carroll University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Terrence W. Wilcutt",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Terrence+W.+Wilcutt+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Western Kentucky University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "Western Kentucky University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Peter J. K. Wisoff",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Peter+J.+K.+Wisoff+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of Virginia",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Applied Physics"
              ],
              "category": "Physics",
              "institution": "Stanford University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "David A. Wolf",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=David+A.+Wolf+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Indiana University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Indiana University",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_12": {
      "selection_year": 1987,
      "selection_date": "1987-06-05",
      "nickname": "The GAFFers",
      "applications_received": null,
      "average_age_of_astronauts": 33.73,
      "astronauts": [
        {
          "name": "Thomas D. Akers",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Thomas+D.+Akers+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Missouri-Rolla",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Applied Mathematics"
              ],
              "category": "Mathematics",
              "institution": "University of Missouri-Rolla",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Applied Mathematics"
              ],
              "category": "Mathematics",
              "institution": "University of Missouri-Rolla",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Andrew M. Allen",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Andrew+M.+Allen+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Florida",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Villanova University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Administration"
              ],
              "category": "Business",
              "institution": "University of Florida",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kenneth D. Bowersox",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kenneth+D.+Bowersox+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Columbia University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Columbia University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Curtis L. Brown Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Curtis+L.+Brown+Jr.+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Air Force Academy",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kevin P. Chilton",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kevin+P.+Chilton+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Columbia University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Columbia University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "N. Jan Davis",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=N.+Jan+Davis+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "female",
          "highest_degree": "Graduate",
          "education": "University of Alabama-Huntsville",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Applied Biology",
                "Mechanical Engineering"
              ],
              "category": "Biology",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Alabama-Huntsville",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "C. Michael Foale",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=C.+Michael+Foale+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Cambridge University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Cambridge University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Laboratory Astrophysics"
              ],
              "category": "Science",
              "institution": "Cambridge University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Gregory J. Harbaugh",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Gregory+J.+Harbaugh+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Houston-Clear Lake",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physical Science"
              ],
              "category": "Science",
              "institution": "University of Houston-Clear Lake",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Mae C. Jemison",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Mae+C.+Jemison+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "female",
          "highest_degree": "MD",
          "education": "Cornell University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemical Engineering"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Cornell University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Donald R. McMonagle",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Donald+R.+McMonagle+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "California State University-Fresno",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical  Engineering"
              ],
              "category": "Engineering",
              "institution": "California State University-Fresno",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Bruce E. Melnick",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Bruce+E.+Melnick+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "West Florida University",
          "military_experience": "US Coast Guard",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "US Coast Guard Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Systems"
              ],
              "category": "Engineering",
              "institution": "West Florida University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "William F. Readdy",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+F.+Readdy+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kenneth S. Reightler Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kenneth+S.+Reightler+Jr.+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Southern California",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Systems Management"
              ],
              "category": "Business",
              "institution": "University of Southern California",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Mario Runco Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Mario+Runco+Jr.+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Rutgers University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Earth & Planetary Science"
              ],
              "category": "Science",
              "institution": "City College of New York",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Atmospheric Physics"
              ],
              "category": "Science",
              "institution": "Rutgers University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James S. Voss",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+S.+Voss+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Colorado",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Auburn University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering Sciences"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_11": {
      "selection_year": 1985,
      "selection_date": "1985-06-04",
      "nickname": null,
      "applications_received": null,
      "average_age_of_astronauts": 32.23,
      "astronauts": [
        {
          "name": "Jerome Apt III",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Jerome+Apt+III+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Harvard University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael A. Baker",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+A.+Baker+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Texas",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Robert D. Cabana",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Robert+D.+Cabana+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Brian Duffy",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Brian+Duffy+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Southern California",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Systems Management"
              ],
              "category": "Business",
              "institution": "University of Southern California",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Charles D. Gemar",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+D.+Gemar+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Military Academy",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "US Military Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Linda M. Godwin",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Linda+M.+Godwin+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Missouri",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics & Physics"
              ],
              "category": "Physics",
              "institution": "Southeast Missouri State",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of Missouri",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Terence T. Henricks",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Terence+T.+Henricks+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Golden Gate University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Civil Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Public Administration"
              ],
              "category": "Other",
              "institution": "Golden Gate University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Richard J. Hieb",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Richard+J.+Hieb+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Colorado",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics & Physics"
              ],
              "category": "Physics",
              "institution": "Northwest Nazarene College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Tamara E. Jernigan",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Tamara+E.+Jernigan+astronaut&go=Go",
          "age_at_selection": 26,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "Rice University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Stanford University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "University of California-Berkeley",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronomy"
              ],
              "category": "Science",
              "institution": "Rice University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Carl J. Meade",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Carl+J.+Meade+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "California Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electronics Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electronics Engineering"
              ],
              "category": "Engineering",
              "institution": "California Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Stephen S. Oswald",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Stephen+S.+Oswald+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Stephen D. Thorne",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Stephen+D.+Thorne+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Pierre J. Thuot",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Pierre+J.+Thuot+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Southern California",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Systems Management"
              ],
              "category": "Business",
              "institution": "University of Southern California",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_10": {
      "selection_year": 1984,
      "selection_date": "1984-05-23",
      "nickname": "The Maggots",
      "applications_received": null,
      "average_age_of_astronauts": 34.59,
      "astronauts": [
        {
          "name": "James C. Adamson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+C.+Adamson+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Princeton University",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Princeton University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Ellen S. Baker",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Ellen+S.+Baker+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "female",
          "highest_degree": "MD",
          "education": "University of Texas",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Geology"
              ],
              "category": "Science",
              "institution": "State University of New York-Buffalo",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Cornell University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Public Health"
              ],
              "category": "Medicine",
              "institution": "University of Texas",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Mark N. Brown",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Mark+N.+Brown+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Air Force Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Air Force Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kenneth D. Cameron",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kenneth+D.+Cameron+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Michigan State University",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Administration"
              ],
              "category": "Business",
              "institution": "Michigan State University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Manley Lanier Carter Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Manley+Lanier+Carter+Jr.+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Emory University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "Emory University",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Emory University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "John H. Casper",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+H.+Casper+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Purdue University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronautics"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Frank L. Culbertson Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Frank+L.+Culbertson+Jr.+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Sidney M. Gutierrez",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Sidney+M.+Gutierrez+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Webster College",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Management"
              ],
              "category": "Business",
              "institution": "Webster College",
              "year_completed": null
            }
          ]
        },
        {
          "name": "L. Blaine Hammond Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=L.+Blaine+Hammond+Jr.+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Georgia Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Marsha S. Ivins",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Marsha+S.+Ivins+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "BS",
          "education": "University of Colorado",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Mark C. Lee",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Mark+C.+Lee+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Civil Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "G. David Low",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=G.+David+Low+astronaut&go=Go",
          "age_at_selection": 28,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics & Engineering"
              ],
              "category": "Engineering",
              "institution": "Washington & Lee University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Cornell University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael J. McCulley",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+J.+McCulley+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Purdue University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Metallurgical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Metallurgical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "William M. Shepherd",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+M.+Shepherd+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical  Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kathryn C. Thornton",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kathryn+C.+Thornton+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Virginia",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Auburn University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of Virginia",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Charles Lacy Veach",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+Lacy+Veach+astronaut&go=Go",
          "age_at_selection": 40,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Air Force Academy",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Management"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James D. Wetherbee",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+D.+Wetherbee+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Notre Dame",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Notre Dame",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_9": {
      "selection_year": 1980,
      "selection_date": "1980-05-29",
      "nickname": "19+80",
      "applications_received": null,
      "average_age_of_astronauts": 33.47,
      "astronauts": [
        {
          "name": "James P. Bagian",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+P.+Bagian+astronaut&go=Go",
          "age_at_selection": 28,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Thomas Jefferson University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Drexel University",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Thomas Jefferson University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John E. Blaha",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+E.+Blaha+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Purdue University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Charles F. Bolden Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+F.+Bolden+Jr.+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Southern California",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Science"
              ],
              "category": "Science",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Systems Management"
              ],
              "category": "Business",
              "institution": "University of Southern California",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Roy D. Bridges Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Roy+D.+Bridges+Jr.+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Purdue University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronautics"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Franklin R. Chang-Diaz",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Franklin+R.+Chang-Diaz+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Connecticut",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Applied Plasma Physics"
              ],
              "category": "Physics",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Mary L. Cleave",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Mary+L.+Cleave+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "Utah State University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Biological Science"
              ],
              "category": "Biology",
              "institution": "Colorado State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Microbial Ecology"
              ],
              "category": "Biology",
              "institution": "Colorado State University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Environmental Engineering"
              ],
              "category": "Engineering",
              "institution": "Utah State University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Bonnie J. Dunbar",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Bonnie+J.+Dunbar+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Houston",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Ceramic Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Washington",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Ceramic Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Washington",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Biomedical Engineering"
              ],
              "category": "Medicine",
              "institution": "University of Houston",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "William F. Fisher",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+F.+Fisher+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "MD",
          "education": "University of Florida",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "Stanford University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Houston",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "University of Florida",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Guy S. Gardner",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Guy+S.+Gardner+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Purdue University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Sciences",
                "Astronautics & Mathematics"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronautics"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Ronald J. Grabe",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Ronald+J.+Grabe+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Air Force Academy",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "David C. Hilmers",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=David+C.+Hilmers+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "Cornell University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "David C. Leestma",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=David+C.+Leestma+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "J. Mike Lounge",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=J.+Mike+Lounge+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Colorado",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics & Physics"
              ],
              "category": "Physics",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astrogeophysics"
              ],
              "category": "Science",
              "institution": "University of Colorado",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Bryan D. O'Connor",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Bryan+D.+O%27Connor+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "West Florida University",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Systems"
              ],
              "category": "Engineering",
              "institution": "West Florida University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Richard N. Richards",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Richard+N.+Richards+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of West Florida",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Missouri",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Systems"
              ],
              "category": "Engineering",
              "institution": "University of West Florida",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Jerry L. Ross",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Jerry+L.+Ross+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Purdue University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Michael J. Smith",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+J.+Smith+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Naval Sciences"
              ],
              "category": "Military Science",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Sherwood C. Spring",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Sherwood+C.+Spring+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Arizona",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Arizona",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Robert C. Springer",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Robert+C.+Springer+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Naval Sciences"
              ],
              "category": "Military Science",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Operations Research"
              ],
              "category": "Mathematics",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_8": {
      "selection_year": 1978,
      "selection_date": "1978-01-16",
      "nickname": "TFNG (Thirty-Five New Guys)",
      "applications_received": 8079,
      "average_age_of_astronauts": 33.06,
      "astronauts": [
        {
          "name": "Guion S. Bluford Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Guion+S.+Bluford+Jr.+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Houston-Clear Lake",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Pennsylvania State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "Air Force Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Administration"
              ],
              "category": "Business",
              "institution": "University of Houston-Clear Lake",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Daniel C. Brandenstein",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Daniel+C.+Brandenstein+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Wisconsin",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics & Physics"
              ],
              "category": "Physics",
              "institution": "University of Wisconsin",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James F. Buchli",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+F.+Buchli+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of West Florida",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering Systems"
              ],
              "category": "Engineering",
              "institution": "University of West Florida",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael L. Coats",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+L.+Coats+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Science & Technology Administration"
              ],
              "category": "Other",
              "institution": "George Washington University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Richard O. Covey",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Richard+O.+Covey+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Purdue University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John O. Creighton",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+O.+Creighton+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "George Washington University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Science & Technology Administration"
              ],
              "category": "Other",
              "institution": "George Washington University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John M. Fabian",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+M.+Fabian+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Washington",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Washington State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "University of Washington",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Anna L. Fisher",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Anna+L.+Fisher+astronaut&go=Go",
          "age_at_selection": 29,
          "gender": "female",
          "highest_degree": "MD",
          "education": "University of California-Los Angeles",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "University of California-Los Angeles",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "University of California-Los Angeles",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "University of California-Los Angeles",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Dale A. Gardner",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Dale+A.+Gardner+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Illinois",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Physics"
              ],
              "category": "Engineering",
              "institution": "University of Illinois",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Robert L. Gibson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Robert+L.+Gibson+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "California Polytechnic Institute",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "California Polytechnic Institute",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Frederick D. Gregory",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Frederick+D.+Gregory+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "George Washington University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Information Systems"
              ],
              "category": "Computer Science",
              "institution": "George Washington University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "S. David Griggs",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=S.+David+Griggs+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "George Washington University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Administration"
              ],
              "category": "Business",
              "institution": "George Washington University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Terry J. Hart",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Terry+J.+Hart+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Rutgers University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Lehigh University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Rutgers University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Frederick H. Hauck",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Frederick+H.+Hauck+astronaut&go=Go",
          "age_at_selection": 37,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Tufts University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Nuclear Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Steven A. Hawley",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Steven+A.+Hawley+astronaut&go=Go",
          "age_at_selection": 27,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of California",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics & Astronomy"
              ],
              "category": "Science",
              "institution": "University of Kansas",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronomy & Astrophysics"
              ],
              "category": "Science",
              "institution": "University of California",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Jeffrey A. Hoffman",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Jeffrey+A.+Hoffman+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Harvard University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Astronomy"
              ],
              "category": "Science",
              "institution": "Amherst College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Materials Science"
              ],
              "category": "Science",
              "institution": "Rice University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astrophysics"
              ],
              "category": "Science",
              "institution": "Harvard University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James D. van Hoften",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+D.+van+Hoften+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Colorado State University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Civil Engineering"
              ],
              "category": "Engineering",
              "institution": "University of California-Berkeley",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Hydraulic Engineering"
              ],
              "category": "Engineering",
              "institution": "University of California-Berkeley",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Fluid Mechanics"
              ],
              "category": "Engineering",
              "institution": "Colorado State University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Shannon W. Lucid",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Shannon+W.+Lucid+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Oklahoma",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "University of Oklahoma",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Biochemistry"
              ],
              "category": "Biology",
              "institution": "University of Oklahoma",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Jon A. McBride",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Jon+A.+McBride+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Ronald E. McNair",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Ronald+E.+McNair+astronaut&go=Go",
          "age_at_selection": 28,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "North Carolina A&T State College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Richard M. Mullane",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Richard+M.+Mullane+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Air Force Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Military Engineering"
              ],
              "category": "Engineering",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Steven R. Nagel",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Steven+R.+Nagel+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "California State University-Fresno",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Illinois",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical  Engineering"
              ],
              "category": "Engineering",
              "institution": "California State University-Fresno",
              "year_completed": null
            }
          ]
        },
        {
          "name": "George D. Nelson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=George+D.+Nelson+astronaut&go=Go",
          "age_at_selection": 28,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Washington",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Harvey Mudd College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronomy"
              ],
              "category": "Science",
              "institution": "University of Washington",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Ellison S. Onizuka",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Ellison+S.+Onizuka+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Colorado",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Judith A. Resnik",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Judith+A.+Resnik+astronaut&go=Go",
          "age_at_selection": 29,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "University of Maryland",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Carnegie-Mellon University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Maryland",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Sally K. Ride",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Sally+K.+Ride+astronaut&go=Go",
          "age_at_selection": 27,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics",
                "English"
              ],
              "category": "Physics",
              "institution": "Stanford University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Stanford University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Francis R. Scobee",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Francis+R.+Scobee+astronaut&go=Go",
          "age_at_selection": 39,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Arizona",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Arizona",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Margaret Rhea Seddon",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Margaret+Rhea+Seddon+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "female",
          "highest_degree": "MD",
          "education": "University of Tennessee",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physiology"
              ],
              "category": "Biology",
              "institution": "University of California-Berkeley",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "University of Tennessee",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Brewster H. Shaw Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Brewster+H.+Shaw+Jr.+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Wisconsin",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Mechanics"
              ],
              "category": "Engineering",
              "institution": "University of Wisconsin",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Mechanics"
              ],
              "category": "Engineering",
              "institution": "University of Wisconsin",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Loren J. Shriver",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Loren+J.+Shriver+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Purdue University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Robert L. Stewart",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Robert+L.+Stewart+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Texas-Arlington",
          "military_experience": "US Army",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "University of Southern Mississippi",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas-Arlington",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Kathryn D. Sullivan",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Kathryn+D.+Sullivan+astronaut&go=Go",
          "age_at_selection": 27,
          "gender": "female",
          "highest_degree": "PhD",
          "education": "Dalhousie University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Earth Sciences"
              ],
              "category": "Science",
              "institution": "University of California-Santa Cruz",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Earth Sciences"
              ],
              "category": "Science",
              "institution": "University of California-Santa Cruz",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Geology"
              ],
              "category": "Science",
              "institution": "Dalhousie University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Norman E. Thagard",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Norman+E.+Thagard+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "MD",
          "education": "University of Texas",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "Florida State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "Florida State University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "University of Texas",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "David M. Walker",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=David+M.+Walker+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Naval Sciences"
              ],
              "category": "Military Science",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Donald E. Williams",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Donald+E.+Williams+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Purdue University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_7": {
      "selection_year": 1969,
      "selection_date": "1969-08-14",
      "nickname": null,
      "applications_received": null,
      "average_age_of_astronauts": 33.43,
      "astronauts": [
        {
          "name": "Karol J. Bobko",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Karol+J.+Bobko+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Southern California",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Air Force Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Southern California",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Robert L. Crippen",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Robert+L.+Crippen+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Texas",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas",
              "year_completed": null
            }
          ]
        },
        {
          "name": "C. Gordon Fullerton",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=C.+Gordon+Fullerton+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "California Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "California Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "California Institute of Technology",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Henry W. Hartsfield Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Henry+W.+Hartsfield+Jr.+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Tennessee",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Auburn University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering Science"
              ],
              "category": "Engineering",
              "institution": "University of Tennessee",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Robert F. Overmyer",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Robert+F.+Overmyer+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Baldwin Wallace College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Donald H. Peterson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Donald+H.+Peterson+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Air Force Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Nuclear Engineering"
              ],
              "category": "Engineering",
              "institution": "US Air Force Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Richard H. Truly",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Richard+H.+Truly+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Georgia Institute of Technology",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_6": {
      "selection_year": 1967,
      "selection_date": "1967-08-04",
      "nickname": "The Excess Eleven (XS-11)",
      "applications_received": null,
      "average_age_of_astronauts": 31.45,
      "astronauts": [
        {
          "name": "Joseph P. Allen",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Joseph+P.+Allen+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Yale University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics & Physics"
              ],
              "category": "Physics",
              "institution": "DePauw University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Yale University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Philip K. Chapman",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Philip+K.+Chapman+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics & Mathematics"
              ],
              "category": "Physics",
              "institution": "University of Sydney",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "University of Sydney",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Instrumentation"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Anthony W. England",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Anthony+W.+England+astronaut&go=Go",
          "age_at_selection": 25,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Geology"
              ],
              "category": "Science",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Geology"
              ],
              "category": "Science",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Geophysics"
              ],
              "category": "Science",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Karl G. Henize",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Karl+G.+Henize+astronaut&go=Go",
          "age_at_selection": 41,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Michigan",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "University of Virginia",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronomy"
              ],
              "category": "Science",
              "institution": "University of Michigan",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Donald L. Holmquest",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Donald+L.+Holmquest+astronaut&go=Go",
          "age_at_selection": 28,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of Houston",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Southern Methodist University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physiology"
              ],
              "category": "Biology",
              "institution": "Southern Methodist University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Baylor University",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "JD",
              "fields": [
                "Law"
              ],
              "category": "Other",
              "institution": "University of Houston",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "William B. Lenoir",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+B.+Lenoir+astronaut&go=Go",
          "age_at_selection": 28,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "John A. Llewellyn",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+A.+Llewellyn+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University College at Cardiff",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "University College at Cardiff",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "University College at Cardiff",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Story Musgrave",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Story+Musgrave+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Columbia University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mathematics & Statistics",
                "Chemistry"
              ],
              "category": "Mathematics",
              "institution": "Syracuse University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Administration"
              ],
              "category": "Business",
              "institution": "University of California-Los Angeles",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Physiology"
              ],
              "category": "Biology",
              "institution": "University of Kentucky",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "Graduate",
              "fields": [
                "Literature"
              ],
              "category": "Other",
              "institution": "University of Houston",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Columbia University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Brian T. O'Leary",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Brian+T.+O%27Leary+astronaut&go=Go",
          "age_at_selection": 27,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of California-Berkeley",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "Williams College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronomy"
              ],
              "category": "Science",
              "institution": "University of California-Berkeley",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Robert A. Parker",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Robert+A.+Parker+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "California Institute of Technology",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics & Astronomy"
              ],
              "category": "Science",
              "institution": "Amherst College",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronomy"
              ],
              "category": "Science",
              "institution": "California Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "William E. Thornton",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+E.+Thornton+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "MD",
          "education": "University of North Carolina",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of North Carolina",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "University of North Carolina",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        }
      ]
    },
    "group_5": {
      "selection_year": 1966,
      "selection_date": "1966-04-04",
      "nickname": "The Original Nineteen",
      "applications_received": null,
      "average_age_of_astronauts": 33.53,
      "astronauts": [
        {
          "name": "Vance D. Brand",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Vance+D.+Brand+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of California Los Angeles",
          "military_experience": "US Marine Corps Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Business Management",
                "Aeronautical Engineering"
              ],
              "category": "Business",
              "institution": "University of Colorado",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Administration"
              ],
              "category": "Business",
              "institution": "University of California Los Angeles",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John S. Bull",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+S.+Bull+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Rice University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Gerald P. Carr",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Gerald+P.+Carr+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Princeton University",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Southern California",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Princeton University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Charles M. Duke Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+M.+Duke+Jr.+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Naval Sciences"
              ],
              "category": "Military Science",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Joe H. Engle",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Joe+H.+Engle+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Kansas",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Kansas",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Ronald E. Evans Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Ronald+E.+Evans+Jr.+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Kansas",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Edward G. Givens Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Edward+G.+Givens+Jr.+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Naval Sciences"
              ],
              "category": "Military Science",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Fred W. Haise Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Fred+W.+Haise+Jr.+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Oklahoma",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Oklahoma",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James B. Irwin",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+B.+Irwin+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Michigan",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Naval Sciences"
              ],
              "category": "Military Science",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Michigan",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Don L. Lind",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Don+L.+Lind+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "University of California-Berkley",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of Utah",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Nuclear Physics"
              ],
              "category": "Physics",
              "institution": "University of California-Berkley",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Jack R. Lousma",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Jack+R.+Lousma+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Michigan",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Thomas K. Mattingly II",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Thomas+K.+Mattingly+II+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Auburn University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Auburn University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Bruce McCandless II",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Bruce+McCandless+II+astronaut&go=Go",
          "age_at_selection": 29,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Houston-Clear Lake",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Administration"
              ],
              "category": "Business",
              "institution": "University of Houston-Clear Lake",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Edgar D. Mitchell",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Edgar+D.+Mitchell+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Industrial Management"
              ],
              "category": "Business",
              "institution": "Carnegie-Mellon University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "William R. Pogue",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+R.+Pogue+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Oklahoma State University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Education"
              ],
              "category": "Other",
              "institution": "Oklahoma Baptist University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Mathematics"
              ],
              "category": "Mathematics",
              "institution": "Oklahoma State University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Stuart A. Roosa",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Stuart+A.+Roosa+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Colorado",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John L. Swigert Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+L.+Swigert+Jr.+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Hartford",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Science"
              ],
              "category": "Engineering",
              "institution": "Rensselaer Polytechnic Institute",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Business Administration"
              ],
              "category": "Business",
              "institution": "University of Hartford",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Paul J. Weitz",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Paul+J.+Weitz+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Pennsylvania State University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Alfred M. Worden",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Alfred+M.+Worden+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Michigan",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Military Science"
              ],
              "category": "Military Science",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical & Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Michigan",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_4": {
      "selection_year": 1965,
      "selection_date": "1965-06-29",
      "nickname": "The Scientists",
      "applications_received": 1351,
      "average_age_of_astronauts": 32.0,
      "astronauts": [
        {
          "name": "Owen K. Garriott",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Owen+K.+Garriott+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Stanford University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Oklahoma",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Stanford University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Edward G. Gibson",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Edward+G.+Gibson+astronaut&go=Go",
          "age_at_selection": 29,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "California Institute of Technology",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Rochester",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "California Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Duane E. Graveline",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Duane+E.+Graveline+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Johns Hopkins University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "University of Vermont",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Public Health"
              ],
              "category": "Medicine",
              "institution": "University of Vermont",
              "year_completed": null,
              "institution_approximate": true
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Johns Hopkins University",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Joseph P. Kerwin",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Joseph+P.+Kerwin+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "MD",
          "education": "Northwestern University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Philosophy"
              ],
              "category": "Other",
              "institution": "College of the Holy Cross",
              "year_completed": null
            },
            {
              "level": "MD",
              "fields": [
                "Medicine"
              ],
              "category": "Medicine",
              "institution": "Northwestern University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "F. Curtis Michel",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=F.+Curtis+Michel+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "California Institute of Technology",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "California Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "California Institute of Technology",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Harrison H. Schmitt",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Harrison+H.+Schmitt+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "Harvard University",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Geology"
              ],
              "category": "Science",
              "institution": "California Institute of Technology",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Geology"
              ],
              "category": "Science",
              "institution": "Harvard University",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_3": {
      "selection_year": 1963,
      "selection_date": "1963-10-18",
      "nickname": "The Fourteen",
      "applications_received": 719,
      "average_age_of_astronauts": 31.21,
      "astronauts": [
        {
          "name": "Buzz Aldrin",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Buzz+Aldrin+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "PhD",
          "education": "MIT",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "William A. Anders",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=William+A.+Anders+astronaut&go=Go",
          "age_at_selection": 30,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "Air Force Institute of Technology",
          "military_experience": "US Air Force Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Nuclear Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Nuclear Engineering"
              ],
              "category": "Engineering",
              "institution": "Air Force Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Charles A. Bassett II",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+A.+Bassett+II+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Texas Technological College",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Texas Technological College",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Alan L. Bean",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Alan+L.+Bean+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Texas",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Texas",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Eugene A. Cernan",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Eugene+A.+Cernan+astronaut&go=Go",
          "age_at_selection": 29,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Naval Postgraduate School",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Electrical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "US Naval Postgraduate School",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Roger B. Chaffee",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Roger+B.+Chaffee+astronaut&go=Go",
          "age_at_selection": 28,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Purdue University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Michael Collins",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Michael+Collins+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Military Academy",
          "military_experience": "US Air Force Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Military Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Walter Cunningham",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Walter+Cunningham+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of California-Los Angeles",
          "military_experience": "US Marine Corps Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of California-Los Angeles",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Physics"
              ],
              "category": "Physics",
              "institution": "University of California-Los Angeles",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "Donn F. Eisele",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Donn+F.+Eisele+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "US Air Force Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Astronautics"
              ],
              "category": "Engineering",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Astronautics"
              ],
              "category": "Engineering",
              "institution": "US Air Force Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Theodore C. Freeman",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Theodore+C.+Freeman+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Michigan",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Naval Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Michigan",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Richard F. Gordon Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Richard+F.+Gordon+Jr.+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Washington",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Chemistry"
              ],
              "category": "Science",
              "institution": "University of Washington",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Russell L. Schweickart",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Russell+L.+Schweickart+astronaut&go=Go",
          "age_at_selection": 28,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null,
              "institution_approximate": true
            }
          ]
        },
        {
          "name": "David R. Scott",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=David+R.+Scott+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "MIT",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautics & Astronautics"
              ],
              "category": "Engineering",
              "institution": "MIT",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Clifton C. Williams Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Clifton+C.+Williams+Jr.+astronaut&go=Go",
          "age_at_selection": 31,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Auburn University",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Auburn University",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_2": {
      "selection_year": 1962,
      "selection_date": "1962-09-17",
      "nickname": "The New Nine",
      "applications_received": 253,
      "average_age_of_astronauts": 32.89,
      "astronauts": [
        {
          "name": "Neil A. Armstrong",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Neil+A.+Armstrong+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Southern California",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aerospace Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Southern California",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Frank Borman",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Frank+Borman+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "California Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "California Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Charles Conrad Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Charles+Conrad+Jr.+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Princeton University",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Princeton University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James A. Lovell Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+A.+Lovell+Jr.+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "James A. McDivitt",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=James+A.+McDivitt+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Michigan",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Astronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Michigan",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Elliot M. See Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Elliot+M.+See+Jr.+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of California-Los Angeles",
          "military_experience": null,
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Merchant Marine Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "University of California-Los Angeles",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Thomas P. Stafford",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Thomas+P.+Stafford+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Edward H. White II",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Edward+H.+White+II+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "Graduate",
          "education": "University of Michigan",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [],
              "category": "",
              "institution": "US Military Academy",
              "year_completed": null
            },
            {
              "level": "Graduate",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Michigan",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John W. Young",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+W.+Young+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Georgia Institute of Technology",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Georgia Institute of Technology",
              "year_completed": null
            }
          ]
        }
      ]
    },
    "group_1": {
      "selection_year": 1959,
      "selection_date": "1959-04-09",
      "nickname": "Mercury Seven",
      "applications_received": null,
      "average_age_of_astronauts": 34.86,
      "astronauts": [
        {
          "name": "M. Scott Carpenter",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=M.+Scott+Carpenter+astronaut&go=Go",
          "age_at_selection": 34,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Colorado",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Colorado",
              "year_completed": null
            }
          ]
        },
        {
          "name": "L. Gordon Cooper Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=L.+Gordon+Cooper+Jr.+astronaut&go=Go",
          "age_at_selection": 32,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Air Force Institute of Technology",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "Air Force Institute of Technology",
              "year_completed": null
            }
          ]
        },
        {
          "name": "John H. Glenn Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=John+H.+Glenn+Jr.+astronaut&go=Go",
          "age_at_selection": 38,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Muskingum College",
          "military_experience": "US Marine Corps",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Engineering"
              ],
              "category": "Engineering",
              "institution": "Muskingum College",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Virgil I. Grissom",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Virgil+I.+Grissom+astronaut&go=Go",
          "age_at_selection": 33,
          "gender": "male",
          "highest_degree": "BS",
          "education": "Purdue University",
          "military_experience": "US Air Force",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Mechanical Engineering"
              ],
              "category": "Engineering",
              "institution": "Purdue University",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Walter M. Schirra Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Walter+M.+Schirra+Jr.+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Naval Sciences"
              ],
              "category": "Military Science",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Alan B. Shepard Jr.",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Alan+B.+Shepard+Jr.+astronaut&go=Go",
          "age_at_selection": 36,
          "gender": "male",
          "highest_degree": "BS",
          "education": "US Naval Academy",
          "military_experience": "US Navy",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Naval Sciences"
              ],
              "category": "Military Science",
              "institution": "US Naval Academy",
              "year_completed": null
            }
          ]
        },
        {
          "name": "Donald K. Slayton",
          "wikipedia_link": "https://en.wikipedia.org/wiki/Special:Search?search=Donald+K.+Slayton+astronaut&go=Go",
          "age_at_selection": 35,
          "gender": "male",
          "highest_degree": "BS",
          "education": "University of Minnesota",
          "military_experience": "US Air Force Reserve",
          "nationality": "USA",
          "is_international": false,
          "degrees": [
            {
              "level": "BS",
              "fields": [
                "Aeronautical Engineering"
              ],
              "category": "Engineering",
              "institution": "University of Minnesota",
              "year_completed": null
            }
          ]
        }
      ]
    }
  }
};
