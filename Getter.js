// Getter dan Setter 
const person = {
    firstName: `Eko`,
    lastName: `Kurniawan`,
    get fullName() {
        return console.log(`${this.firstName} ${this.lastName}}`);
    }
}

// Otomatis panggil get fullname()
console.log(person.fullName);
