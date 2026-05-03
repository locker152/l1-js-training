function updateName() {
            const originalNameElement = document.getElementById('originalName');
            const newname = document.getElementById('newName').value;
            if (!newname) {
                alert('请输入新的姓名');
                return;
            }
            originalNameElement.textContent = `姓名： ${newname}`;
            newName.value = '请输入新的姓名';

        }
function updateAge() {
            const originalAgeElement = document.getElementById('originalAge');
            const newage = document.getElementById('newAge').value;
            if (!newage) {
                alert('请输入新的年龄');
                return;
            }
            originalAgeElement.textContent = `年龄： ${newage}`;
            newAge.value = '请输入新的年龄';
        }
function updateGender() {
            const originalGenderElement = document.getElementById('originalGender');
            const newgender = document.getElementById('newGender').value;
            if (!newgender) {
                alert('请输入新的性别');
                return;
            }
            originalGenderElement.textContent = `性别： ${newgender}`;
            newGender.value = '请输入新的性别';
        }
function updatePhone() {
            const originalPhoneElement = document.getElementById('originalPhone');
            const newphone = document.getElementById('newPhone').value;
            if (!newphone) {
                alert('请输入新的手机号');
                return;
            }
            originalPhoneElement.textContent = `手机号： ${newphone}`;
            newPhone.value = '请输入新的手机号';
        }
