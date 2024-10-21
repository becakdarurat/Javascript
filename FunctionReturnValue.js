// Function dengan Return Value
function sayHello(firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}

// Memanggil function dan menangkap return valuenya
const result = sayHello(`Sofyan`, `Tanjung`);
console.log(result);

// function return value lebih dari satu
// function hitungAngka(value) {
//     if(value > 90){
//         return `A`;
//     } else if (value > 80) {
//         return `B`;
//     } else if (value > 70) {
//         return `C`;
//     } else if (value > 60) {
//         return `D`;
//     } else if (value > 50) {
//         return `E`;
//     } else {
//         return `F`;
//     }
// }

function hitungAngka(value) {
    switch (value){
        case value > 90 :
            return `A`;
            break;
        case value > 80 :
            return `B`;
            break;
        case value > 70 :
            return `C`;
            break;
        case value > 60 :
            return `D`;
            break;
        case value > 50 :
            return `E`;
            break;
        default :
            return `A`;
            break;
    }
}
console.log(hitungAngka(100));


// Menghentikan eksekusi dengan return value
function isContains(array, searchValue) {
    for (const element of array) {
     if ( element === searchValue ) { 
        return true;
      }
    }
    return false;
}
console.log(isContains([1,2,3,4,5,6,7,8,9,10], 5));


