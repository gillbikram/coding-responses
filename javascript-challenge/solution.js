// You have an array.
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1-99 (not always 1-2)
// e.g. [{ name: "bulbasaur", types: ["grass", "poison"] }]
const pokes = getPokes();
console.log("Pokes", pokes);

// Problem 1: Filter by type
// - Populate `answer1` with Pokemon names that contain the type string
const type = "grass";
const answer1 = []; // TODO

//loop through the array and check if each of them has the value of "type" (in this case, grass) in its types list. If it does, we add it to our answer array.
for (let i = 0; i < pokes.length; i++) {
    if (pokes[i].types.includes(type)) {
        answer1.push(pokes[i].name);
    }
}

// Problem 2: Filter by types (AND / OR)
// - Populate `answer2Or` with Pokemon names that satisfy AT LEAST ONE of the given types
// - Populate `answer2And` with Pokemon names that satisfy ALL of the given types
// (Note that the length of the given `types` can be 1-99. (not always 1-2))
const types = ["bug", "poison"];
const answer2Or = []; // TODO
const answer2And = []; // TODO


// For the OR part, we need only one type for it to be added to the list - created hasAtleastOne parameter
for (let i = 0; i < pokes.length; i++) {
  let hasAtLeastOne = false;
  for (let j = 0; j < types.length; j++) {
    if (pokes[i].types.includes(types[j])) {
      hasAtLeastOne = true;
      break;
    }
  }
  if (hasAtLeastOne) {
    answer2Or.push(pokes[i].name);
  }
}

// For the AND part, all types must match - created hasAllTypes parameter
// easier here to declare all elements as true, then eliminate the ones that do not have all types
for (let i = 0; i < pokes.length; i++) {
  let hasAllTypes = true;
  for (let j = 0; j < types.length; j++) {
    if (!pokes[i].types.includes(types[j])) {
      hasAllTypes = false;
      break;
    }
  }
  if (hasAllTypes) {
    answer2And.push(pokes[i].name);
  }
}


// See your results in your DevTools console
console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

// --------------------------------

function getPokes() {
  const elScript = document.querySelector("#pokes");
  const json = elScript.text;
  const data = JSON.parse(json);
  return data;
}
