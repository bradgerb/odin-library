const myLibrary =[];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function(){
        let info = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read
        return info
    }
}

function addBookToLibrary(bookName){
    myLibrary.push(bookName);
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not yet read')
const harryPotter1 = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K.Rowling', '320', 'read')

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter1);

console.log(theHobbit.info());
console.log(harryPotter1.info());

console.table(myLibrary);

// function bookForSale(title, author, pages, read, price, ISBN){
//     Book.call(this, title, author, pages, read)
//         this.price = price;
//         this.ISBN = ISBN;
//         this.information = function(){
//             return this.price
//         }
// }

// const theTwoTowers = new bookForSale('The Two Towers', 'J.R.R. Tolkien', '500', 'read', '$12.99', '12345')

// console.log(theTwoTowers.information());
// console.log(theTwoTowers.info());

// console.log(Object.getPrototypeOf(theTwoTowers));
