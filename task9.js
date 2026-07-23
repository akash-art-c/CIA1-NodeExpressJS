let patients = [
    { name: "Rahul", age: 30 },
    { name: "Anjali", age: 25 },
    { name: "Riya", age: 40 },
    { name: "Karan", age: 60 }
];

patients.pop();

patients.sort((a, b) => a.age - b.age);

console.log("Sorted Patients:", patients);
