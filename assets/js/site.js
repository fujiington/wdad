// spaghetti monster code
 
const mainContent = document.getElementById('content');
const newListButton = document.getElementById('newListButton');
const content = document.getElementById('content');
 
 
 
newListButton.addEventListener('click',()=>{
 
   
   
    // Clear the content
    content.innerHTML = '';
   
    // Create a section container
    const section = document.createElement('section');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const okButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    // Create label
   
    label.textContent = 'Name:';
    label.setAttribute('for', 'listName');
    input.type = 'text';
    input.id = 'listName';
    input.value = 'default name';
    okButton.textContent = 'OK';
    cancelButton.textContent = 'Cancel';
   
   
   
    okButton.addEventListener('click', () => {
        console.log('OK clicked, list name:', input.value);
        createListElement();
    });
   
   
   
    cancelButton.addEventListener('click', () => {
        console.log('Cancel clicked');
       createListElement();
    });
   
    section.appendChild(label);
    section.appendChild(input);
    section.appendChild(okButton);
    section.appendChild(cancelButton);
    content.appendChild(section);
    });
 
    function createListElement() {
    mainContent.innerHTML = '';
    const list = document.createElement('div');
    list.innerHTML = '<h2>List View</h2><ul></ul>';
    mainContent.appendChild(list);}
 