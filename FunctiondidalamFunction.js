// Inner Function
function Outer() {
    function Inner() {
        console.log(`Inner`);
    }

    Inner();
    Inner();
}
Outer();