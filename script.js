let myLibrary = [];

const book1 = new Book(`The Fellowship of the Ring`, `J.R.R. Tolkien`, 423, `Read`);
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
        let bookCardNumOfPages = document.querySelector(`.pages-display-${i + 1}`);
        bookCardNumOfPages.textContent += `${bookNumPages}`;
        let bookCardStatus = document.querySelector(`.status-display-${i + 1}`);
        let bookCardStatusSpan = document.createElement('span');
        if(bookStatus == `Not Read`) {
            bookCardStatusSpan.classList.add(`not-read`);
        }
        else if(bookStatus == `Read`) {
            bookCardStatusSpan.classList.add(`read`);
        }
        bookCardStatusSpan.textContent += `${bookStatus}`;
        bookCardStatus.appendChild(bookCardStatusSpan);
    }
}

function generateBookCard(index) {
    let bookCard = document.createElement('div');

    let mainCardDisplay = document.createElement('div');
    mainCardDisplay.classList.add(`main-card-display`);
    
    let bookTitleDisplay = document.createElement('div');
    bookTitleDisplay.classList.add(`book-title`, `title-display-${index + 1}`);
    mainCardDisplay.appendChild(bookTitleDisplay);

    let bookAuthorDisplay = document.createElement('div');
    bookAuthorDisplay.classList.add(`book-author`, `author-display-${index + 1}`);
    bookAuthorDisplay.textContent = `by `;
    mainCardDisplay.appendChild(bookAuthorDisplay);

    let auxCardDisplay = document.createElement('div');
    auxCardDisplay.classList.add(`aux-card-display`);

    let cardLineLeft = document.createElement('div');
    cardLineLeft.classList.add(`card-line`);
    auxCardDisplay.appendChild(cardLineLeft);

    let bookNumPagesDisplay = document.createElement('div');
    bookNumPagesDisplay.classList.add(`book-num-pages`, `pages-display-${index + 1}`);
    bookNumPagesDisplay.textContent = `no. of pages: `;
    auxCardDisplay.appendChild(bookNumPagesDisplay);

    let cardLineMiddle = document.createElement('div');
    cardLineMiddle.classList.add(`card-line`);
    auxCardDisplay.appendChild(cardLineMiddle);

    let bookStatusDisplay = document.createElement('div');
    bookStatusDisplay.classList.add(`book-status-display`, `status-display-${index + 1}`);
    bookStatusDisplay.textContent = `Status: `;
    auxCardDisplay.appendChild(bookStatusDisplay);

    let cardLineRight = document.createElement('div');
    cardLineRight.classList.add(`card-line`);
    auxCardDisplay.appendChild(cardLineRight);

    let cardDeleteButton = document.createElement('div');
    cardDeleteButton.classList.add(`card-delete-button`, `delete-button-${index + 1}`);
    //let deleteButtonX = document.createElement('span');
    cardDeleteButton.innerHTML = `x`;
    //deleteButtonX.classList.add(`delete-button-x`);
    //deleteButtonX.innerHTML = `x`;
    //cardDeleteButton.appendChild(deleteButtonX);
    auxCardDisplay.appendChild(cardDeleteButton);

    bookCard.appendChild(mainCardDisplay);
    bookCard.appendChild(auxCardDisplay);

    return bookCard;
}

displayBooks(myLibrary);