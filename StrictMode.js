// Strict Mode Javascript
{
    function useStrictMode(){
        const person = {
            firstName: `Sofyan Tanjung`,
        }
        with (person) {
            console.log(person);
        }
    }
    useStrictMode();
}