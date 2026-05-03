let MyBooks = [
    {name: '西游记', author: '吴承恩', status: '已完成'},
    {name: '三国演义', author: '罗贯中', status: '已完成'}
];

const BooksList = document.getElementById('BookList');

function render() {
    BooksList.innerHTML = '';
    MyBooks.forEach((book, index) => {
        const li = document.createElement('li');
        li.className = 'NewBook';
        li.innerHTML = `
            <span>${book.name}</span>
            <span>${book.author}</span>
            <span>${book.status}</span>
            <button onclick="DeleteBook(${index})">删除</button>
        `;
        BooksList.appendChild(li);
    });
}

function AddBook() {
    const nameInput = document.getElementById('BookName');
    const authorInput = document.getElementById('BookAuthor');
    const statusInput = document.getElementById('Bookstatus');

    if (!nameInput.value || !authorInput.value) {
        alert('请填写完整的书籍信息');
        return;
    }

    const newBook = {
        name: nameInput.value,
        author: authorInput.value,
        status: statusInput.value
    };

    MyBooks.push(newBook);
    render(); 

    nameInput.value = '';
    authorInput.value = '';
    statusInput.value = '';
}

function DeleteBook(index) {
    MyBooks.splice(index, 1);
    render(); 
}

render();