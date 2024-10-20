// With Statement menurunkan scope
const person = {
    firstName: "Eko",
    middleName: "Kurniawan",
    lastName: "Khannedy"
};

const firstName = "Budi";
const lastName = "Nugraha";

with (person) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}
