const myLibrary =[];
const container = document.querySelector(".body");
const newBookForm = document.getElementById("newBookForm");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let info = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read;
        return info
    }
}

function addBookToLibrary(bookName){
    myLibrary.push(bookName);
}

function displayLibrary(){

    let index = 0;

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

        const removeButton = document.createElement("button");
        removeButton.setAttribute("ID", `${index}`);
        removeButton.classList.add("cardButton");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", removeBook);
        card.appendChild(removeButton);

        const changeReadButtton = document.createElement("button");
        changeReadButtton.setAttribute("ID", `${index}`);
        changeReadButtton.textContent = "Change Read status";
        changeReadButtton.addEventListener("click", changeRead);
        card.appendChild(changeReadButtton);

        index++;

        container.appendChild(card);
    }
    console.log(myLibrary);
}

function clearCards(){

    for(let i = 0; i < myLibrary.length; i++){
        container.removeChild(container.lastChild);
    }
}

function removeBook(){

    let a = this.id;

    clearCards();
    myLibrary.splice(a, 1);
    displayLibrary();
}

function changeRead(){

    let a = this.id;

    clearCards();

    if (myLibrary[a].read === "yes" || myLibrary[a].read === "read"){
        myLibrary[a].read = "no";
    }   else{
        myLibrary[a].read = "yes";
    }

    displayLibrary();
}

newBookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(newBookForm);

    // for (item of formData) {
    //     console.log(item[0], item[1]);
    // }

    const newBook = new Book(formData.get("title"), formData.get("author"), formData.get("pages"), formData.get("read"));

    clearCards();
    addBookToLibrary(newBook);
    displayLibrary();

});

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read', 0)
const harryPotter1 = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K.Rowling', '320', 'read', 1)

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter1);

displayLibrary();
