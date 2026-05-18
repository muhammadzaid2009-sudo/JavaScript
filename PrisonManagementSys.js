/*
add new prisoners 
show all prisoners
search for a prisoner by name or ID
show details of a specific prisoner
*/
let prisoners = [
  {
    id: 69,
    name: "Anmol Pinki",
    age: 27,
    cellNo: 804
  },
];

function addPrisoner(id, name, age, cellNo) {
  const newPrisoner = {
    id: id,
    name: name,
    age: age,
    cellNo: cellNo,
  };
  prisoners.push(newPrisoner);
}

function showAllPrisoners() {
  prisoners.forEach((prisoner) => {
    console.log(
      `ID: ${prisoner.id}, Name: ${prisoner.name}, Age: ${prisoner.age}, Cell No: ${prisoner.cellNo}`,
    );
  });
  return prisoners;
}

function SearchPrisoner(keyword) {
  let found = prisoners.find(
    (prisoner) =>
      prisoner.name.toLowerCase() === keyword.toLowerCase() ||
      prisoner.id === keyword,
  );

  if (found) {
    console.log(
      `ID: ${found.id}, Name: ${found.name}, Age: ${found.age}, Cell No: ${found.cellNo}`,
    );
  } else {
    console.log("Prisoner not found.");
  }
}
addPrisoner(70, "John Doe", 30, 805);
addPrisoner(71, "Jane Smith", 25, 806);
showAllPrisoners();
SearchPrisoner("John Doe");
