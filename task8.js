let patients = [
    { name: "Rahul", age: 30 },
    { name: "Anjali", age: 25 },
    { name: "Riya", age: 40 }
];

patients.push({ name: "Karan", age: 60 });

let oldestPatient = patients[0];

for (let patient of patients) {
    if (patient.age > oldestPatient.age) {
        oldestPatient = patient;
    }
}

console.log("Oldest Patient:", oldestPatient);
