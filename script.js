let myLibrary = [];

document.querySelector(`.floating-button`).addEventListener('click', generateNewBookForm);

class Book {
    constructor(title, author, numPages, status) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.status = status;
    }

    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set author(author) {
        this._author = author;
    }
    get author() {
        return this._author;
    }
    set numPages(numPages) {
        this._numPages = numPages;
    }
    get numPages() {
        return this._numPages;
    }
    set status(status) {
        this._status = status;
    }
    get status() {
        return this._status;
    }
}

function addBookToLibraryFiller(book) {
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
        let bookCardStatusDropdownButton = document.querySelector(`.dropdown-button-${i + 1}`);
        if(bookStatus == `Not Read`) {
            bookCardStatusDropdownButton.classList.add(`not-read`);
        }
        else if(bookStatus == `Read`) {
            bookCardStatusDropdownButton.classList.add(`read`);
        }
        bookCardStatusDropdownButton.innerHTML = `${bookStatus}`;
    }
}

function generateBookCard(index) {
    let bookCard = document.createElement('div');

    let mainCardDisplay = document.createElement('div');
    mainCardDisplay.classList.add(`main-card-display`);
    
    let bookTitleDisplay = document.createElement('div');
    bookTitleDisplay.classList.add(`book-title`, `title-display-${index + 1}`);
    bookTitleDisplay.addEventListener('click', updateBookStatus);
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

    let bookStatusDropdown = document.createElement('div');
    bookStatusDropdown.classList.add(`status-dropdown`, `dropdown-${index + 1}`);
    let statusDropdownButton = document.createElement('div');
    statusDropdownButton.classList.add(`status-dropdown-button`, `dropdown-button-${index + 1}`);
    let statusDropdownContent = document.createElement('div');
    statusDropdownContent.classList.add(`status-dropdown-content`, `dropdown-content-${index + 1}`);
    let dropdownContentRead = document.createElement('div');
    dropdownContentRead.classList.add(`content-read-${index + 1}`, `read`);
    dropdownContentRead.innerHTML = `Read`;
    dropdownContentRead.addEventListener('click', updateBookStatus);
    let dropdownContentNotRead = document.createElement('div');
    dropdownContentNotRead.classList.add(`content-not-read-${index + 1}`, `not-read`);
    dropdownContentNotRead.innerHTML = `Not Read`;
    dropdownContentNotRead.addEventListener('click', updateBookStatus);
    statusDropdownContent.appendChild(dropdownContentRead);
    statusDropdownContent.appendChild(dropdownContentNotRead);
    bookStatusDropdown.appendChild(statusDropdownContent);
    bookStatusDropdown.appendChild(statusDropdownButton);

    bookStatusDisplay.appendChild(bookStatusDropdown);

    let cardLineRight = document.createElement('div');
    cardLineRight.classList.add(`card-line`);
    auxCardDisplay.appendChild(cardLineRight);

    let cardDeleteButton = document.createElement('div');
    cardDeleteButton.classList.add(`card-delete-button`, `delete-button-${index + 1}`);
    cardDeleteButton.innerHTML = `x`;
    cardDeleteButton.addEventListener('click', deleteBook);
    auxCardDisplay.appendChild(cardDeleteButton);

    bookCard.appendChild(mainCardDisplay);
    bookCard.appendChild(auxCardDisplay);

    return bookCard;
}

function updateBookStatus() {
    let thisClassList = this.classList;
    console.table(thisClassList);
    let arrayIndex = thisClassList[0].slice(-1);
    console.log(arrayIndex);
    myLibrary[arrayIndex - 1].status = `${this.innerHTML}`;
    clearCardList();
    displayBooks(myLibrary);
}

function deleteBook() {
    let thisClassList = this.classList;
    console.table(thisClassList);

    let arrayIndex = thisClassList[1].slice(-1);
    console.log(arrayIndex);
    myLibrary.splice(arrayIndex-1, 1);
    console.table(myLibrary);
    clearCardList();
    displayBooks(myLibrary);
}

function clearCardList() {
    let cardList = document.querySelector('#card-list');
    cardList.innerHTML = ``;
}

function generateNewBookForm() {
    let libraryBody = document.body;
    let container = document.querySelector('#container');
    container.classList.add(`blur`, `unclickable`);
    let floatingButton = document.querySelector('.floating-button');
    floatingButton.classList.add(`hidden`);
    let newBookForm = document.createElement('form');
    newBookForm.classList.add(`new-book-form`);

    let newBookFormHeader = document.createElement('div');
    newBookFormHeader.classList.add(`new-book-form-header`);
    newBookFormHeader.innerHTML = `Add a New Book`;
    newBookForm.appendChild(newBookFormHeader);
    let newBookFormLineTop = document.createElement('div');
    newBookFormLineTop.classList.add(`line`);
    newBookForm.appendChild(newBookFormLineTop);

    let newBookTitle = document.createElement('div');
    newBookTitle.classList.add(`new-book-title`, `new-book-field`);
    let newBookTitleText = document.createElement('label');
    newBookTitleText.classList.add(`new-book-form-field-text`);
    newBookTitleText.textContent = `Title`;
    newBookTitle.appendChild(newBookTitleText);
    let newBookTitleInput = document.createElement('input');
    newBookTitleInput.setAttribute('type', 'text');
    newBookTitleInput.classList.add(`new-book-input`, `new-title-input`);
    newBookTitle.appendChild(newBookTitleInput);
    newBookForm.appendChild(newBookTitle);

    let newBookFormLineMiddleTop = document.createElement('div');
    newBookFormLineMiddleTop.classList.add(`line`);
    newBookForm.appendChild(newBookFormLineMiddleTop);

    let newBookAuthor = document.createElement('div');
    newBookAuthor.classList.add(`new-book-form-author`, `new-book-field`);
    let newBookAuthorText = document.createElement('label');
    newBookAuthorText.classList.add(`new-book-form-field-text`);
    newBookAuthorText.textContent = `Author`;
    newBookAuthor.appendChild(newBookAuthorText);
    let newBookAuthorInput = document.createElement('input');
    newBookAuthorInput.setAttribute('type', 'text');
    newBookAuthorInput.classList.add(`new-book-input`, `new-author-input`);
    newBookAuthor.appendChild(newBookAuthorInput);
    newBookForm.appendChild(newBookAuthor);

    let newBookFormLineMiddleBottom = document.createElement('div');
    newBookFormLineMiddleBottom.classList.add(`line`);
    newBookForm.appendChild(newBookFormLineMiddleBottom);

    let newBookPagesAndStatus = document.createElement('div');
    newBookPagesAndStatus.classList.add(`new-book-pages-n-status`, `new-book-field`);
    let newBookPagesText = document.createElement('label');
    newBookPagesText.classList.add(`new-book-form-field-text`);
    newBookPagesText.textContent = `Pages`;
    newBookPagesAndStatus.appendChild(newBookPagesText);
    let newBookPagesSpinner = document.createElement('input');
    newBookPagesSpinner = setSpinnerAttributes(newBookPagesSpinner, {'type':'number', 'min':'1', 'max':'1000'});
    newBookPagesSpinner.classList.add(`pages-spinner`);
    let newBookStatusText = document.createElement('label');
    newBookStatusText.classList.add(`new-book-form-field-text`);
    newBookStatusText.textContent = `Status`;
    let newBookStatusDropdown = document.createElement('select');
    newBookStatusDropdown.classList.add(`status-select`);
    let statusSelectRead = document.createElement('option');
    statusSelectRead.setAttribute('value', 'Read');
    statusSelectRead.classList.add(`read`);
    statusSelectRead.innerHTML = `Read`;
    newBookStatusDropdown.appendChild(statusSelectRead);
    let statusSelectNotRead = document.createElement('option');
    statusSelectNotRead.setAttribute('value', 'Not Read');
    statusSelectNotRead.classList.add(`not-read`);
    statusSelectNotRead.innerHTML = `Not Read`;
    newBookStatusDropdown.appendChild(statusSelectNotRead);

    newBookPagesAndStatus.appendChild(newBookPagesText);
    newBookPagesAndStatus.appendChild(newBookPagesSpinner);
    newBookPagesAndStatus.appendChild(newBookStatusText);
    newBookPagesAndStatus.appendChild(newBookStatusDropdown);
    newBookForm.appendChild(newBookPagesAndStatus);

    let newBookFormLineBottom = document.createElement('div');
    newBookFormLineBottom.classList.add(`line`);
    newBookForm.appendChild(newBookFormLineBottom);

    let newBookFormButtons = document.createElement('div');
    newBookFormButtons.classList.add(`new-book-form-buttons`);
    let submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submitButton.classList.add(`submit-button`, `form-button`);
    newBookFormButtons.appendChild(submitButton);
    let cancelButton = document.createElement('button');
    cancelButton.classList.add(`cancel-button`, `form-button`);
    cancelButton.innerHTML = `Cancel`;
    cancelButton.addEventListener('click', closeForm);
    newBookFormButtons.appendChild(cancelButton);
    newBookForm.appendChild(newBookFormButtons);

    libraryBody.appendChild(newBookForm);

    submitButton.addEventListener('click', addBookToLibrary);
}

function closeForm() {
    let select = document.body;
    select.removeChild(select.lastChild);

    let container = document.querySelector('#container');
    container.classList.remove(`blur`, `unclickable`);

    let floatingButton = document.querySelector('.floating-button');
    floatingButton.classList.remove(`hidden`);
}

function setSpinnerAttributes(spinner, attrs) {
    for (var key in attrs) {
        spinner.setAttribute(key, attrs[key]);
    }

    return spinner;
}

function addBookToLibrary() {
    let newBookTitle = document.querySelector('.new-title-input').value;
    let newBookAuthor = document.querySelector('.new-author-input').value;
    let newBookNumPages = document.querySelector('.pages-spinner').value;
    let newBookStatus = document.querySelector('.status-select').value;

    if(newBookTitle == "" || newBookAuthor == "" || newBookNumPages == "" || newBookStatus == "") {
        alert(`Please fill out all the fields in the form!`);
    } else {
        let newBook = new Book(newBookTitle, newBookAuthor, newBookNumPages, newBookStatus);
        console.table(newBook);
        myLibrary.push(newBook);
    }
    closeForm();
    clearCardList();
    displayBooks(myLibrary);
}

const book1 = new Book(`The Fellowship of the Ring`, `J.R.R. Tolkien`, 423, `Read`);
const book2 = new Book(`The Two Towers`, `J.R.R. Tolkien`, 352, `Not Read`);
const book3 = new Book(`The Return of the King`, `J.R.R. Tolkien`, 416, `Not Read`);

addBookToLibraryFiller(book1);
addBookToLibraryFiller(book2);
addBookToLibraryFiller(book3);

displayBooks(myLibrary);