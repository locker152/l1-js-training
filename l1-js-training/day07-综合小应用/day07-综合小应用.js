var habits = JSON.parse(localStorage.getItem('myHabits')) || [
    { id: 1, title: "早起喝水", isDone: false },
    { id: 2, title: "阅读10页", isDone: true }
];

var listDiv = document.getElementById('habitList');

show();

document.getElementById('addBtn').onclick = function() {
    var name = document.getElementById('habitName').value;
    
    if (name == "") {
        alert("习惯名称不能为空！");
        return;
    }

    var newData = {
        id: Date.now(), 
        title: name,
        isDone: false
    };

    habits.push(newData);
    saveAndShow();
    document.getElementById('habitName').value = ""; // 清空
};

function show() {
    var str = "";
    var doneCount = 0;

    for (var i = 0; i < habits.length; i++) {
        var activeClass = habits[i].isDone ? "done" : "";
        var btnText = habits[i].isDone ? "取消打卡" : "打卡"; 
        
        if (habits[i].isDone) doneCount++;

        str += '<div class="item">' + 
               '<span class="' + activeClass + '">' + habits[i].title + '</span> ' +
               '<button onclick="toggle(' + habits[i].id + ')">' + btnText + '</button> ' +
               '<button onclick="del(' + habits[i].id + ')">删除</button>' +
               '</div>';
    }

    listDiv.innerHTML = str;
    document.getElementById('totalNum').innerText = habits.length;
    document.getElementById('doneNum').innerText = doneCount;
}

function toggle(id) {
    for (var i = 0; i < habits.length; i++) {
        if (habits[i].id == id) {
            habits[i].isDone = !habits[i].isDone; // 取反
        }
    }
    saveAndShow();
}

function del(id) {
    habits = habits.filter(function(item) {
        return item.id !== id;
    });
    saveAndShow();
}

function saveAndShow() {
    localStorage.setItem('myHabits', JSON.stringify(habits));
    show();
}