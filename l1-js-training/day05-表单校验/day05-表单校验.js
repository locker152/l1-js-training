// 获取表单
var form = document.getElementById('myOrder');

form.onsubmit = function(event) {
    
    event.preventDefault();

    
    var name = document.getElementById('userName').value;
    var tel = document.getElementById('userTel').value;
    var note = document.getElementById('userNote').value;

    
    if (name == "") {
        alert("请填写姓名！");
    } 
    else if (tel == "") {
        alert("请填写电话！");
    } 
    else if (tel.length < 11) {
        
        alert("电话号码格式不对，太短了！");
    } 
    else {
        
        document.getElementById('info').innerHTML = "<h4>提交成功：</h4>" + 
            "姓名：" + name + "<br>" +
            "电话：" + tel + "<br>" +
            "备注内容：" + note;
            
        
        document.getElementById('userName').value = "";
        document.getElementById('userTel').value = "";
        document.getElementById('userNote').value = "";
    }
};