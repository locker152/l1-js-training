
let myTasks = [
    { taskName: "阅读 JavaScript 指南", isCompleted: false },
    { taskName: "完成 CSS Flex 布局练习", isCompleted: true },
    { taskName: "观看 Vue.js 教程视频", isCompleted: false },
    { taskName: "整理学习笔记", isCompleted: false },
    { taskName: "预习 React 状态管理", isCompleted: false }
];
const taskList = document.getElementById('taskList');
const stats = document.getElementById('stats');

function render() {
    taskList.innerHTML = '';
    let Count = 0;

    myTasks.forEach((task, index) => {
        const li = document.createElement('li');
        
        li.className = task.isCompleted ? 'task-item done' : 'task-item';
        
        li.innerHTML = `
            <span>${task.taskName}</span>
            <button onclick="change(${index})">
                ${task.isCompleted ? '撤销' : '完成'}
            </button>
        `;
        
        taskList.appendChild(li);

        
        if (task.isCompleted) Count++;
    });

    
    stats.innerText = `全部: ${myTasks.length} | 已完成: ${Count} | 进行中: ${myTasks.length - Count}`;
}


function change(index) {
    
    myTasks[index].isCompleted = !myTasks[index].isCompleted;
    render(); 
}

render();