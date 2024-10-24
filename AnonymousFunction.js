// Function Anonymous / tanpa nama
let say = function(name) {
    console.log(`Halo ${name}`);
}
say(`Sofyan Tanjung`);

// anonymous function di parameter 
function giveMeName(callback) {
    callback(`Sofyan Tanjung`);
}
giveMeName(function (name) {
    console.log(`Halo ${name}`);
});