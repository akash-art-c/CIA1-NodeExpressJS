let patients = [
    { name: "Rahul", age: 30 },
    { name: "Anjali", age: 15 },
    { name: "Riya", age: 40 },
    { name: "Karan", age: 60 }
];

for (let patient of patients) {

    if (patient.age < 18) {
        continue;
    }

    console.log(patient.name, patient.age);
}
