class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isCheckout = false;
    }

    displayInfo() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }

    checkout() {
        if(!this.isCheckout) {
            this.isCheckout = true;
            return true;
        }
        return false;
    }

    returnBook() {
        if(this.isCheckout) {
            this.isCheckout = false;
            return true;
        }
        return false;
    }
}

class Library {

    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Book ${book.title} has been added to the library`);
    }

    findBookByISBN(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }

    checkoutBook(isbn) {
        const book = this.findBookByISBN(isbn);
        if(book) {
            if(book.checkout()) {
                console.log(`Book ${book.title} has been checked out`);
                return true;
            } else {
                console.log(`Book ${book.title} is already checked out`);
            }
        } else {
            console.log(`Book with ISBN ${isbn} not found`);
        }
    }

    returnBook(isbn) {
        const book = this.findBookByISBN(isbn);
        if(book) {
            if(book.returnBook()) {
                console.log(`Book ${book.title} has been returned`);
                return true;
            } else {
                console.log(`Book ${book.title} is already in the library`);
            }
        } else {
            console.log(`Book with ISBN ${isbn} not found`);
        }
    }

    listAvailableBooks() {
        return this.books.filter(book => !book.isCheckout)
                        .map(book => book.displayInfo());
    }
}

function demonstrateLibrarySystem() {

    const ygnLibrary = new Library('Yangon Library');

    const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565');
    const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '9780061120084');
    const book3 = new Book('1984', 'George Orwell', '9780451524935');

    ygnLibrary.addBook(book1);
    ygnLibrary.addBook(book2);
    ygnLibrary.addBook(book3);

    // checkout a book
    ygnLibrary.checkoutBook('9780743273565');

    // see available books
    console.log(ygnLibrary.listAvailableBooks());

    // return the book
    ygnLibrary.returnBook('9780743273565');
}

demonstrateLibrarySystem();