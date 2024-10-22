// Rest Parameter
function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    console.log(`Total ${name} is ${total}`);
}
sum(`Orance`, ...[2,3,4,5,6,7,8]);
sum(`Apple`, ...[5,5,6,7,5,6]);
sum(`Banana`, ...[9,5,2,3,4] );

const value = [1,2,3,4,5,6,7];
console.log(...value);
