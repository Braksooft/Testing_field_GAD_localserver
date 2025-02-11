// 1. Napisz funkcję JavaScript, która:
//     Będzie przyjmować imię jako argument
//     Wypisze w konsoli komunikat: “Witaj, [imię]!”

//Odpowiedz 
// function dodajImie(name){
//     console.log(`Witaj ,${name}`)
// }
// dodajImie("ania")

// 2.Napisz funkcję JavaScript, która:

//     Będzie przyjmować wiek jako argument
//     Sprawdzi, czy użytkownik jest pełnoletni (18 lat lub więcej)
//     Wypisze w konsoli komunikat: “Jesteś pełnoletni”, jeśli użytkownik ma 18 lat lub
//     więcej, lub “Nie jesteś pełnoletni”, jeśli ma mniej niż 18 lat
//     Zwróci wartość true dla pełnoletnich użytkowników i false dla niepełnoletnich

//Odpowiedz 
// function bramkarz(wiek) {
//     if(wiek >= 18){
//         console.log("Jesteś pełnoletni")
//         return true;
//     }else {
//         console.log("Nie jesteś pełnoletni")
//         return false;}
// }
// bramkarz("99")
// bramkarz(-1)

// Odpowiedz z neta 
// function checkage(age){
//     const userage = age >= 18;
//     console.log( userage ? "Jesteś pełnoletni" : "Nie jesteś pełnoletni")
//     return userage;
// }
// checkage(17)

// 3. Napisz funkcję JavaScript, która:

//     Będzie przyjmować liczbę jako argument
//     Sprawdzi, czy liczba jest parzysta
//     Wypisze w konsoli “The number {podana_wartosc} is even”, jeśli liczba 
//     spełnia warunek, lub “The number {podana_wartosc} is odd”, jeśli nie

// Odpowiedz

// function checkingisEven(number){
//     if(number % 2 ===0){
//         console.log(`Number ${number} is even`)
//     }
//     else{
//         console.log(`Number${number} is odd`)
//     }
// }
// checkingisEven(2)

// Odpowiedz z neta 
// function checkingnumber(number){
//     if(typeof number !== "number" || !Number.isFinite(number)){
//         console.error('Invalid input: Please provide a finite number.');
//         return
//     }
//     console.log(number % 2 ===0 ? "the number is even" : "Number is odd")
// }
// checkingnumber(1)
// checkingnumber(2)
// checkingnumber("test")
// checkingnumber(NaN)

// 4. Napisz funkcję JavaScript, która:

//     Będzie przyjmować tablicę liczb jako argument
//     Zsumuje wszystkie dodatnie liczby w tablicy
//     Funkcja powinna zwracać wynik sumy
//     Po wywołaniu funkcji i otrzymaniu wyniku – wypisz sumę na konsoli

// function addNumber(tables) {
//     let wynik = 0;
//     for (let index = 0; index < tables.length; index++) {
//         if (tables[index] > 0) {
//             wynik += tables[index]
//         }
//     }
//     console.log("Sum of positive numbers: ", wynik)
//     return wynik
// }
// const tables = [3, -1, 7, 0];
// const sum = addNumber(tables)
// console.log(sum)
// Napisz funkcję, która:

//     Będzie przyjmować tablicę liczb jako argument
//     Funkcja powinna sumować liczby większe od 10
//     Funkcja powinna zwracać wynik sumy
//     Po wywołaniu funkcji i otrzymaniu wyniku – wypisz sumę na konsoli

// function addNumbers(num){
//     let element = 0
//         for (let i = 0; i < num.length; i++) {
//             if(num[i] > 10)
//             element += num[i];
//         }
//         return element
//     }

// const num = [5, 12, 8, 21, 7, 14, -10];
// let sum = addNumbers(num)
// console.log(sum)

// function student(user){
//     let ocena = 0;
//     let dzielnik = user.grades.length
//     for (let i = 0; i < user.grades.length; i++) {
//         ocena += user.grades[i];
        
//     }
//     ocena = ocena / dzielnik
    
//     console.log(`${user.name}${user.surname} ma średnią ocen ${ocena}`)
// }

// const user={
//     name: "Anna",
//     surname: "Nowak",
//     grades: [5, 4, 3, 5, 4]
// }

// student(user)

// Napisz funkcję JavaScript, która:

//     Będzie przyjmować ciąg znaków jako argument (adres e-mail).
//     Sprawdzi, czy podany adres e-mail jest poprawny (powinien zawierać znak @ oraz domenę, np. .com).
//     Jeśli e-mail jest poprawny, wypisz w konsoli informację "Email is valid" i zwróć wartość true.
//     Jeśli e-mail jest niepoprawny, wypisz w konsoli informację "Email is invalid" i zwróć wartość false.

// function regrex(email){
    
//     if(email.includes('@') && email.includes('.com')||email.includes('.net')){
//         console.log('email is valid')
//         return true;
//     }
//     else {
//         console.log('email is invalid')
//         return false;
//     }

// }
// regrex("test@example.com")
// regrex("invalidemail.com")

// class Book {
//     constructor ( title , author, pages ){
//         this.title = title,
//         this.author = author,
//         this.pages = pages
//     }
//     describe(){
//         console.log(`Książka ${this.title} autorstwa ${this.author} zawiera ${this.pages} stron`)
//     }
// }
// const book = new Book("Władca Pierścieni", "J.R.R. Tolkien", 1178);
// booktwo.describe();

// Napisz skrypt, który tworzy obiekt reprezentujący książkę i autora. Zdefiniuj następujące klasy:

//     Utwórz klasę Author, która będzie miała właściwości:
//         firstName – imię autora
//         lastName – nazwisko autora
//     Utwórz klasę Book, która będzie miała właściwości:
//         title – tytuł książki
//         author – obiekt typu Author

// Stwórz instancję klasy Book, która będzie reprezentować książkę z wybranym tytułem oraz autorem.

// Dodaj do klasy Book metodę getDetails(), która zwróci tekst w formacie: “Książka ‘[tytuł]’ napisana przez [imię] [nazwisko].”

// Na koniec, wyświetl w konsoli:

//     Opis książki korzystając z metody getDetails().

// class Author {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// class Book {
//     constructor(title, author) {
//         this.title = title
//         this.author = author
//     }
//     getDetails() {
//         return `Tytuł ${this.title} author ${this.author.firstName} ${this.author.lastName} `
//     }
// }

// const author = new Author( 'J.K.','Rowling')
// const book = new Book ("Harry Potter", author)

// console.log(book.getDetails())


class Author{
    constructor(firstName , lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}
class Book{
    constructor(title, author){
        this.title = title
        this.author = author
    }
    getDetails(){
        return `Książka ${this.title} napisana przez ${this.author.firstName} ${this.author.lastName}.”`
    }
}

const author = new Author("J.K." ,"Rowling")
const book = new Book("Harry Potter",author)
console.log(book.getDetails(author))


