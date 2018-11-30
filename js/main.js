// console.log('hello connected');
//
// function myFunc(str){
//   console.log(str + 'Jarvis');
//   // Create bar
//   var bar = document.createElement("bar");
//   document.body.appendChild(bar);
// }
function myFunc() {
  $(document).ready(function() {

    $('h1').css('background-color', 'blue');

    $('body').html('<div class="bar"></div>');

  });
}


