// Break Statement
let counter = 1;
while (true) {
    console.log(`Perulangan ke ${counter}`);
    counter++;
    if (counter > 10) {
        console.log(`kode berhenti ke perulangan ke ${counter}`);
        break;
        // tidak di eksekusi 
        console.log(`kode berhenti ke perulangan ke ${counter}`);
    }
}