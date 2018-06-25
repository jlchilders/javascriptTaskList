const listDiv = document.querySelector('#list');
const addItemButton = document.querySelector('#addItem');
const addListText = document.querySelector('input.addListText');
const listLink = document.querySelector('.listLink');
const listUl = listDiv.querySelector('ul');
const lis = listUl.children;

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.id = 'listLink';
    li.className = 'list-group-item active';
    li.textContent = addListText.value;
    ul.appendChild(li);
    addListText.value = '';

    //Create delete button
    let linkDelete = document.createElement('button');
    linkDelete.className = 'delete btn-link float-right';
    linkDelete.setAttribute('href', '#');
    linkDelete.textContent = 'x';
    li.appendChild(linkDelete);
    
    //Create checkbox
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.className = 'check list-group-item';
    li.appendChild(check);

});

 
listUl.addEventListener('click', (e) => {
    if (e.target.className == 'check list-group-item') {
        let check = e.target;
        if (check.checked == true) {
            let li = e.target.parentNode;
            let ul = li.parentNode;
            li.style.color = 'lightgray';
            li.style.textDecoration='line-through';
            ul.appendChild(li);
            li.appendChild(linkDelete);
        }
        else {
            let li = e.target.parentNode;
            let ul = li.parentNode;
            li.style.color = 'black';
            li.style.textDecoration = 'none';
            let firstItem = listUl.firstElementChild;
            ul.insertBefore(li, firstItem);
        }

    }
});

//TODO: Add event listener for delete button



