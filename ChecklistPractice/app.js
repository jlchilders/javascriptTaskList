const listDiv = document.querySelector('.list');
const addItemButton = document.querySelector('#addItem');
const addListText = document.querySelector('input.addListText');
const listLink = document.querySelector('.listLink');
const listUl = listDiv.querySelector('ul');

//add list item based on user input
addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    
        //'<button type = "button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    li.id = 'listLink';
    li.className = 'active';
    li.textContent = addListText.value;
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    //button.setAttribute('class', 'close');
    button.setAttribute('aria-label', 'Close');
    button.appendChild(document.createTextNode('Remove'));
    //let span = document.createElement('span');
    //span.setAttribute('aria-hidden', 'true');
    //span.appendChild(document.createExpression('&times;'));
    //button.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    addListText.value = '';
});

//strikethrough selected list item 
//TODO: and move to bottom of list
listUl.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI' && e.target.className === 'active') {
        let li = e.target;
        li.className = 'inactive';
    }
});


//color code?