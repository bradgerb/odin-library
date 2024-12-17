const myLibrary =[];
const container = document.querySelector(".body");
const newBookForm = document.getElementById("newBookForm");
let indexCount = 0;

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

function displayLibrary(){

    for(let i = 0; i < myLibrary.length; i++){

        let readY_N;

        if (myLibrary[i].read === 'read' || myLibrary[i].read === 'yes'){
            readY_N = "Yes"
        } else {
            readY_N = "No"
        }

        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = `Title: ${myLibrary[i].title}\nAuthor: ${myLibrary[i].author}\nPage Count: ${myLibrary[i].pages}\nRead?: ${readY_N}\n`;

        const button = document.createElement("button");
        button.textContent = "Remove";
        card.appendChild(button);

        container.appendChild(card);
    }
}

function clearCards(){

    for(let i = 0; i < myLibrary.length; i++){
        container.removeChild(container.lastChild);
    }
}

newBookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(newBookForm);

    // for (item of formData) {
    //     console.log(item[0], item[1]);
    // }

    const newBook = new Book(formData.get("title"), formData.get("author"), formData.get("pages"), formData.get("read"));
    console.log(newBook);
    console.log(myLibrary);

    clearCards();
    addBookToLibrary(newBook);
    displayLibrary();

});

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read')
const harryPotter1 = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K.Rowling', '320', 'read')

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter1);

displayLibrary();
