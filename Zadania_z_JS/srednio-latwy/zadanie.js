// Napisz funkcję JavaScript, która:

//     Będzie przyjmować dwa parametry: text (ciąg znaków) oraz word (słowo do znalezienia)
//     Zwróci wynik w postaci liczby oznaczającej pozycję słowa


// function indexText(text,word){
//     return texting = text.indexOf(word)
// }
// const text = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';

// console.log(indexText(text,word))

// Napisz funkcję JavaScript, która:

//     Przyjmuje tablicę jako parametr
//     Zwraca nową odwróconą tablicę

// function dasc(array){
//    return array.sort(function(a,b){return b-a})
// //    return array.reverse()


// }

// const array = [1, 2, 3, 4, 5];
// console.log(dasc(array))

// function tabNumb(numbers){
//     const evenNumber = numbers.filter(number => number % 2 === 0)
//     return evenNumber
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(tabNumb(numbers))

// Napisz funkcję JavaScript, która:

// Przyjmuje ciąg znaków jako parametr
// Zwraca nową tablicę z wyrazami

// function splitWordx(sentence){
//     return sentence.split(' ').filter(word=>word.lenght > 0)
   
// }


// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(splitWordx(sentence))

// function toBig(sentence ){
//     return sentence.toUpperCase()
// }


// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(toBig(sentence))

function schoolHR(){

    class Student {
        constructor(name , grade){
            this.name = name ;
            this.grade = grade;
        }    
    }
    class SchoolClass {
        constructor(className ){
            this.className = className;
            this.students = [];
    }
    addStudent(student) {
        this.students.push(students)

    }
    
}
const klasaA = new SchoolClass('klasa A')
classA.addStudent(new Student('Jan', 5))
classB.addStudent(new Student('Maria', 4))
classC.addStudent(new Student('Adam', 3))

console.log(schoolHR())
