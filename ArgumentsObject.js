// Fitur Lama sebelum ada Rest Parameter
function oldSum() {
    let total = 0;
    // argument menangkap nilai yang dikirim ke paramter
    for (const item of arguments) {
        total += item;
    }
    console.info(`Total info ${total}`);
}

oldSum(1,2,3,4,5,6,7,8,9,10);