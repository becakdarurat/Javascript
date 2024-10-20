// Continue Statement
for (let i = 0; i < 100; i++) {
    if ( i % 2 === 0 ) { 
        console.log(`Perulangan GENAP ke ${i}`);
        continue;
    }
    console.log(`Perulangan GANJIL ke ${i}`);
}
