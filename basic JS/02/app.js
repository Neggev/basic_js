// Look at the code from exercise 1 to build a webpage that uses HTML inputs to take the first name
// last name, gender, address, email, and age of the person browsing the web page
// Store each of these data points into Local Storage. Use the console to
// print a report of the data stored in the Local Storage.




let submit = document.getElementsByClassName('button')[0];

submit.addEventListener('click', function getFname(){
  
  let fname = document.getElementsByClassName('fname')[0].value;
  let gender = document.getElementsByClassName('gender')[0].value;
  let address = document.getElementsByClassName('address')[0].value;
  let email = document.getElementsByClassName('email')[0].value;
  let age = document.getElementsByClassName('age')[0].value;
  
  localStorage.setItem("name", fname);
  localStorage.setItem("gender", gender);
  localStorage.setItem("address", address);
  localStorage.setItem("email", email);
  localStorage.setItem("age", age);
  
  
  document.getElementsByClassName('fname-output')[0].innerHTML = localStorage.getItem("name");
  document.getElementsByClassName('gender-output')[0].innerHTML = localStorage.getItem("gender");
  document.getElementsByClassName('address-output')[0].innerHTML = localStorage.getItem("address");
  document.getElementsByClassName('email-output')[0].innerHTML = localStorage.getItem("email");
  document.getElementsByClassName('age-output')[0].innerHTML = localStorage.getItem("age");


})