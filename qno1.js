// var myfavouritegame=["carom","ludo","chess","cricket"];
// console.log(myfavouritegame);

// var fruits = ['Apple', 'Banana', 'Orange','pear','mango']
// let removeditem=fruits.splice(1,1)

// var fruits = ['Apple', 'Banana', 'Orange']

// let removedItem = fruits.splice(1,1)


// spread operaTOR IN ARRAY
// var a=[10,20,30];
// var b=[40,50 ,60];
// var c=[...a,...b];
// console.log(a);
// console.log(b);
//  console.log(c);

//  rest operator in Object 
function show (a,...args){
    console.log(a)
    console.log (args[1]);
}
show(10,20,30,40,50) 