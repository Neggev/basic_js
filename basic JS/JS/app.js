// Make an address book to store the name and email addresses of the user of the webpage.
// Every time one is added make sure it prints out the info into a nicely formatted list.
// Use Bootstrap so it looks good on any device. 


// get user input for name and email
// add user input to JSON
// print out info in JSON to table

function submitContact(event){
    event.preventDefault();

    let name = document.querySelector('.name').value;
    localStorage.setItem('name', name);
    // console.log(name);
    let email = document.querySelector('.email').value;
    localStorage.setItem('email', email);
    console.log(email);

    let table = document.getElementsByClassName('table')[0];

    let row = document.createElement('tr');
    table.append(row);

    let nameCol = document.createElement('td');
    nameCol.innerHTML = name;
    row.append(nameCol);
    
    let emailCol = document.createElement('td');
    emailCol.innerHTML = email;
    row.append(emailCol);


}

let add = document.querySelector('.add-contact');

add.addEventListener('click', submitContact);