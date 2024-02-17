// 1. Variable
var myName = 'Khan';
console.log(myName);

// 2. Operators: +, -, *, /, %
// Shorthand: +=, -=, *=, /=
// ++, --

// 3. Array
var friends = ['abul', 'babul', 'kabul', 'dabul', 'ebul'];
console.log(friends);
// to know array value by index no
friends[2];
console.log(friends[2]);
// to change the array value by index no
friends[2] = 'Mokbul';
console.log(friends[2]);

// 4. Conditions
// >, <, >=, <=, ==, ===, !=, !==
if(friends.length <2){
    console.log('fokor fokor mokor')
}
else{
    console.log(Goru);
}

// 4. Loop
var number = 0;
while(number <= 6){
    console.log(number);
    number++;
}
for(var i = 0; i <= 10; i++){
    console.log(i);
}

// 5. Function
function isMoonUp(time){
    if(time > 7){
        return true;
    }
}

//  6. Object
// Point to be noted: though it's look like same as variable and array but it has some extra rules like 1. it can contain value name 2. Object will enclose with second bracket {} 3. value name then colon then value 4. after declare value put comma but not in last value.
var jantus = {
    height: 60,
    romanticism: 'heavy',
    bapperTaka: 'borolox'
}
