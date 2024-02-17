function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        // console.log('This is Leap year', year);
        return true;
    }
    else{
        // console.log('this is not a Leap Year', year);
        return false;
    }
    // return false (we can write only this line except else condition)
}
const isMyYearLeapYear = isLeapYear(1999);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear);