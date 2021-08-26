// var Student = function (name) {
//     this.name = name;
// }

// Student.prototype.age = 38;

// var student = new Student("Carl");

// for (var item in student) {
//     if (student.hasOwnProperty(item)) {
//         console.log(student[item]);        
//     }
// }

var sum = 0;

for (var i = 1; i <= 10000; i++) {
    sum += i;
    if (i === 50) {
        break;    // immediately transfers control outside the for block
    }
}

console.log("Sum = " + sum);       // => Sum = 1275
