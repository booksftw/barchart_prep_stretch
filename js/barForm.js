console.log('bar form js connected');


// <form id="form2">
//   Enter Values by Bar: <br>
// <p>DYNAMIC GENERATE THIS FOR EACH BAR</p>
// <input type="number" name="bar">
//   </form>

function createForm(name, args) {

  if (name === 'form2') {
    $('#form2').css('display', 'inline-block');

    let amountOfBars = args;
    // Generate this many bars
    console.log(amountOfBars, 'generate this many bars for form');

    // Title
    $('#barFormContainer').append('<p> Enter Values </p>');
    for (let i = 0; i < amountOfBars; i++) {
      // Dynamically create second form
      $('#barFormContainer').append(`
     <form id="form2">
        <!--Enter Values by Bar: <br>-->
        bar ${i}:
        <input type="number" name="bar">
     </form>
    `);
    }

  }
}

function onForm1Submit() {
  $(document).ready(function() {

    var amountOfBars = $('#form1 input')[0].value;

    // Hide first form and create the next one
    $('#form1').css('display', 'none');

    createForm('form2', amountOfBars);
  });
}

function onForm2Submit() {
  $(document).ready(function() {


  });
}


// jQuery('#form1 input')
