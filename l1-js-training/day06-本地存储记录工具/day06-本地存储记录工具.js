
var books = JSON.parse(localStorage.getItem('myBooks')) || [];
var listDiv = document.getElementById('list');

showBooks();
addBtn = document.getElementById('addBtn')
addBtn.onclick = function() {
    var name = document.getElementById('bookName').value;
    var score = document.getElementById('bookScore').value;

    if (name == "" || score == "") {
        alert("请输入完整信息！");
    } else {
        books.push({ title: name, point: score });
        localStorage.setItem('myBooks', JSON.stringify(books));
        showBooks();
        document.getElementById('bookName').value = "";
        document.getElementById('bookScore').value = "";
    }
};


function showBooks() {
    var str = "";
    for (var i = 0; i < books.length; i++) {
        str += '<div style="border-bottom:1px solid white; padding:10px;">' + 
               books[i].title + '：' + books[i].point + ' ' +
               '<button onclick="delBook(' + i + ')">删除</button>' +
               '</div>';
    }
    listDiv.innerHTML = str;
}


function delBook(index) {
    books.splice(index, 1); 
    localStorage.setItem('myBooks', JSON.stringify(books)); 
    showBooks(); 
}
clearBtn = document.getElementById('clearBtn');

clearBtn.onclick = function() {
    books = []; 
    localStorage.removeItem('myBooks'); 
    showBooks(); 
};