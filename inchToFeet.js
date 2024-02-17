const myInches = 60;
const myFeet = myInches / 12;
console.log(myFeet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 84;
const nanaFeet = inchToFeet(nanaInches);
console.log('Nana feet: ', nanaFeet);
