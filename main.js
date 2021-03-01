const save = document.querySelector('#save');
const list = [];

function saveRecord() {
    
    fname = document.querySelector('#fname').value;
    lname = document.querySelector('#lname').value;
    sex = document.querySelector('#male').checked;
    age = document.querySelector('#age').value;
    city = document.querySelector('#city').value;
    country = document.querySelector('#country').value;
    diabeteYes = document.querySelector('#yes').checked;
    diabeteNo = document.querySelector('#no').checked;

    if((fname.trim().length < 2) || (lname.trim().length < 2)){
        var toastEl = document.querySelector('.toast');
        const toast = new bootstrap.Toast(toastEl, {})
        toast.show();
    }
    else {
        const mList = [lname, fname, sex, age, city, country, diabeteNo];

        list.push(mList);
        displayList();
    }

}

function displayList(){
    mylist = document.querySelector('#list');
    mylist.innerHTML = '';
    list.forEach(element => {
        const singleList = document.createElement('div');
        singleList.className = 'border m-1';

        const item = document.createElement('p');
        item.className = 'ms-2 pt-2';
        item.innerHTML = `${element[0]} ${element[1]} (${element[2]?"Male" : "Female"}), ${element[3]} - ${element[4]} (${element[5]})`; 

        console.log(element)
        singleList.append(item);
        mylist.append(singleList);
        
    });
}
save.addEventListener('click', saveRecord);