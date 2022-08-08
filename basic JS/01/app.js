// Create a webpage that uses HTML inputs to take in the first name and store it in local storage. Find a creative way to
// display this name using any of the styling techniques we have learned.

let submit = document.getElementsByClassName('button')[0];

submit.addEventListener('click', function getFname(){
  
  let fname = document.getElementsByClassName('fname')[0].value;
  console.log(fname);

  localStorage.setItem("name", fname);
  
  document.getElementsByClassName('fname-output')[0].innerHTML = localStorage.getItem("name");

})