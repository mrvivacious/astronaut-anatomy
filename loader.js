// loader.js

// etc

let p = document.getElementById("data");
let output = '';
let astronauts = nasa.astronaut_groups.group_23.astronauts

for (let i = 0; astronauts[i]; i++) {
  let current = astronauts[i];
  let name = current.name;
  let year = "2023";

  let str = `<h3>${name}</h3>`
  str += `<p>Selected in ${year}</p>`
  
  output += str;
}

p.innerHTML = output;
