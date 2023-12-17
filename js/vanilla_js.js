let people = [
    { name: "Alex" },
    { name: "Tom", gender: "M"},
    { name: "Bob", gender: "m"},
    { name: "Mary", gender: "F"},
];

let result = people.map(function(person) {
    if(person.gender) {
        if(person.gender === "m" || person.gender === "M") {
            person.gender = "Male";
        }
        if(person.gender === "f" || person.gender === "F") {
            person.gendre = "Female";
        }
        else {
            person.gender = "Unknown";
        }

        return person;
    }
})

console.log(people)