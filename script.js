let myLibrary = [];

const book1 = new Book(`The Fellowship of the Ring`, `J.R.R. Tolkien`, 423, `Not Read`);
const book2 = new Book(`The Two Towers`, `J.R.R. Tolkien`, 352, `Not Read`);
const book3 = new Book(`The Return of the King`, `J.R.R. Tolkien`, 416, `Not Read`);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function Book(title, author, numPages, status) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(myLibrary) {
    let cardList = document.querySelector('#card-list');
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = generateBookCard(i);
        bookCard.classList.add(`book-card`, `book-${i + 1}`);
        cardList.appendChild(bookCard);
        let bookTitle = myLibrary[i].title;
        let bookAuthor = myLibrary[i].author;
        let bookNumPages = myLibrary[i].numPages;
        let bookStatus = myLibrary[i].status;
        let bookCardTitle = document.querySelector(`.title-display-${i + 1}`);
        bookCardTitle.textContent = `${bookTitle}`;
        let bookCardAuthor = document.querySelector(`.author-display-${i + 1}`);
        bookCardAuthor.textContent += `${bookAuthor}`;
    }
}

function generateBookCard(index) {
    let bookCard = document.createElement('div');
    
    let bookTitleDisplay = document.createElement('div');
    bookTitleDisplay.classList.add(`book-title`, `title-display-${index + 1}`);
    bookCard.appendChild(bookTitleDisplay);

    let bookAuthorDisplay = document.createElement('div');
    bookAuthorDisplay.classList.add(`book-author`, `author-display-${index + 1}`);
    bookAuthorDisplay.textContent = `by `;
    bookCard.appendChild(bookAuthorDisplay);

    return bookCard;
}

displayBooks(myLibrary);