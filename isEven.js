function isEven(num){
    const reminder = num % 2;
    if(reminder === 0){
        // console.log('number is even')
        return true;
    }
    else{
        // console.log('number is odd');
        return false;
    }
}
const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);