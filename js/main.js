//
// function myFunc(str){
//   console.log(str + 'Jarvis');
//   // Create bar
//   var bar = document.createElement("bar");
//   document.body.appendChild(bar);
// }

// [module_require_name].bar.create()
//
//
//
///
//

form1Data = {
  amount:0
}

//Form Start
//
//
//
//
//
function onForm1Submit() {
  $(document).ready(function() {

    var amountOfBars = $('#form1 input')[0].value;

    // Hide first form and create the next one
    $('#form1').css('display', 'none');

    form1Data.amount = amountOfBars;
    createForm('form2', amountOfBars);
  });
}

function onForm2Submit() {
  console.log('form 2 submit');
  $(document).ready(function() {
    var form2Input = $('#form2 input');
    console.log(form2Input);
    var barValue = [];

    for (var i = 0; i < form2Input.length ; i++) {
      var inputValue = form2Input[i].value;
      barValue.push(form2Input);
    }

    // form2Inputs.forEach( (input) => {
    //   console.log(input.value);
    // });
  });
}

function createForm(name, args) {

  if (name === 'form2') {
    $('#form2').css('display', 'inline-block');

    let amountOfBars = args;
    // Generate this many bars
    console.log(amountOfBars, 'generate this many bars for form');

    // Open tag
    $('#barFormContainer').html(`
      <p> Enter Values </p>
      <form id="form2">
    `)
    // middle
    for (let i = 0; i < amountOfBars; i++) {
      // Dynamically create second form
      $('#form2').append(`
     
        <!--Enter Values by Bar: <br>-->
        bar ${i}:
        <input type="number" name="bar">
    `);
    }

    // Close tag
    $('#form2').append(`
     <button type="button" onclick="onForm2Submit()">Submit</button>
     </form>
     `)

  }
}

// FORM END
//
//
//



// Get Data from barForm.js and call this function
// In the mean time make dummy data to test.
function drawBarChart(dataARRAY, optionsOBJECT, elementHTMLSELECTOR ){

}

function Bar(name, barValue) {
  this.name = name;
  this.barValue  = barValue;
  this.barWidth = 200;
  this.barHeight = 100;
  this.barColour = 'black';
  this.barLabelColour = 'silver';
  this.barMarginSpacing = 15;
  this.barTitle = '[Insert Name Here]';
}

function testAddBarGraph() {

  // This is how you dynamically set up bar creation
  // You may need to process it before inserting into DOM
  // var bar1 = new Bar('test', 10);
  
  console.log('test add', form1Data.amount);


  //Static inserting in
  $(document).ready(function() {

    var i = 1;
    $('h1').css('background-color', 'blue');
    $('#mainContainer').append(`<div class="bar${i}"></div>`);

  });
}


