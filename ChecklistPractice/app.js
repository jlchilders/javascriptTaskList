const listDiv = document.querySelector('.list');
const addItemButton = document.querySelector('#addItem');
const addListText = document.querySelector('input.addListText');

//add list item based on user input
addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let a = document.createElement('a');
    let li = document.createElement('li');
    a.className = 'listLink';
    a.setAttribute('href', '#');
    a.textContent = addListText.value;
    li.appendChild(a);
    ul.appendChild(li);
    addListText.value = '';
});

//strikethrough selected list item and move to bottom of list

//color code?