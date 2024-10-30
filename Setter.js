// Setter 
const person = {
    firstName: `Eko`,
    lastName: `Kurniawan`,
    get fullName() {
        return console.log(`${this.firstName} ${this.lastName}}`);
    },
    set fullName(val) {
        const array = val.split(` `);
        this.firstName = array[0];
        this.lastName = array[1];
    }
}

// Otomatis panggil get fullname()
person.fullName = `Budi Nugraha`;
console.log(person.firstName);
console.log(person.lastName);