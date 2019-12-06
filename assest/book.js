class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

class UI{
    static bookShow(){
        const arrayBooks = [
            {
                title: 'book one',
                author: 'Segun Dosumu',
                isbn: '12345'
            },
            {
                title: 'book two',
                author: 'Isiaka Gbadebo',
                isbn: '22345'
            }
        ];
        const books = arrayBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book){
        const tableShow = document.querySelector('#tableShow');

        const row = document.createElement('tr');
        row.innerHTML = 
        `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="btn btn-danger btn-sm delete">x</a></td>`;

        tableShow.appendChild(row);
    }
    static deleteBook(el){
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    static clearField(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

document.addEventListener('DOMContentLoaded', UI.bookShow);

document.querySelector('#insert').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        alert ('Please kindly type in your book details');
    }else{
        
    const book = new Book(title, author, isbn);

    UI.addBookToList(book);
    UI.clearField(book);
    
    }

});

document.querySelector('#tableShow').addEventListener('click',(e) => {
    UI.deleteBook(e.target);
    // console.log(e.target);
});

