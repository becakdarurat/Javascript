// Default Parameter Function 
function register(name, gender=`UNKNOWN`) {
    console.log(name);
    console.log(gender);
}
register(`Sofyan`, `MALE`);
register(`EKO`);
register(`JOKO`, undefined);