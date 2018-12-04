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

form2Data = [];

// Key maps to Bar #
form3Data = [];


//Form Start
//
//
//
//
//
function onForm1Submit() {


    var amountOfBars = $('#form1 input')[0].value;

    // Hide first form and create the next one
    $('#form1').css('display', 'none');

    form1Data.amount = amountOfBars;
    createForm('form2', amountOfBars);
}

function onForm2Submit() {
  console.log('form 2 submit');
    var form2Input = $('#form2 input');
    console.log(form2Input);


    for (var i = 0; i < form2Input.length ; i++) {
      var inputValue = form2Input[i].value;
      form2Data.push(inputValue);
      console.log('inserting into form2 data');
    }

    //Hide form2 and create new one
    $('#form2').css('display','none');
    console.log('creating form 3 this many bars', form1Data.amount);
    createForm('form3', form1Data.amount)
}

function onForm3Submit() {
  console.log('form 3 submit');

    ///
    ///
    /// Where did I leave off ?
    /// You're looping the input fields on form3 and it's not pushing into form 3 object enough
    /// once you have it stored in the form3Data object you can use it for your bar chart
    ///
    // A light reminder that you still need to create form 4 and 5 and maybe hide the chart until the end.

    // Make this dynamic after
    const form3InputsLength = 4;

    var form3Inputs = $('#form3 input');
    var form3DataObj = {};

    for (var i = 0; i < FIXMEHERE_ ; i++) {
      // Insert form3 values into form 3 data object
      var form3InputBarColour;
      var form3InputLabelColour;
      var form3InputSpacing;
      //var form3InputChartAxes Disabled. Figure out what it is and activate it

      var el = form3Inputs[i];
      console.log(el ,' INPUTS');

      if (el.name ==='barColour'){
        console.log(el.name, el.value);
        form3DataObj.barColour = el.value;
      }

      if (el.name === 'labelColour') {
        console.log(el.name, el.value);
        form3DataObj.labelColour = el.value;
      }

      if (el.name === 'barSpacing') {
        console.log(el.name, el.value);
        form3DataObj.barSpacing = el.value;
      }

      form3Data.push(form3DataObj);
      console.log(form3Data, 'form 3 data');

      // cont
    }

    //Hide form2 and create new one
    //TEMP DISABLED
    // $('#form3').css('display','none');

    createForm('form4', form1Data.amount)
}

// Instead form1,2,3, name variables based functionality.
function createAmountForm() {

  $('#barFormContainer').html(`
      <form id="form1">
         How many bars?<br>
         <input type="number" name="barAmount" value="s"><br>
         <button type="button" onclick="onForm1Submit()">Enter</button>
      </form>
  `)
  console.log('Generating the amount form');
}

function createValuesForm() {
  $('#form2').css('display', 'inline-block');

  let amountOfBars = args;
  // Generate this many bars
  console.log(amountOfBars, 'generate this many bars for form');

  // Open tag
  $('#barFormContainer').html(`
      <div id="form2">
      <p> Enter Values </p>
      <form>
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
     </div>
     `)
}

function createConfigForm() {
  $('#form3').css('display', 'inline-block');

  let amountOfBars = args;
  // Generate this many bars
  console.log(amountOfBars, 'Form 3 mount');

  // Open tag
  $('#barFormContainer').html(`
      <div id="form3">
      <p> Enter Configuration </p>
      <form>
    `)
  // middle
  for (let i = 0; i < amountOfBars; i++) {
    // Dynamically create second form
    $('#form3').append(`
 
        <ul>
          <p><strong>Bar ${i}</strong></p>
          <li>
            Bar Colour:
            <input type="text" class=bar${i} name="barColour" placeholder="black" value="black">
          </li>
           <li>
             Label Colour:
            <input type="text" class=bar${i} name="labelColour" placeholder="green" value="green">
          </li>
          <li>            
            Spacing:
            <input type="number" class=bar${i} name="barSpacing" placeholder="10" value="10">
          </li>
          <li>
            Chart Axes????? Ask about this
            <input type="text">
          </li>
        </ul>
    `);
  }

  // Close tag
  $('#form3').append(`
     <button type="button" onclick="onForm3Submit()">Submit</button>
     </form>
     </div>
     `)
}

function createForm(name, args) {

  // Create functions instead of these conditions
  //
  if (name === 'form2') {
    createAmountForm();
  }// close form 2

  if (name === 'form3') {
    createValuesForm();
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

// sample maybe not use this factory
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

    for (let i = 0; i < form1Data.amount; i++) {
      console.log('creating this many >', form1Data.amount);
      console.log($('#mainContainer'))
      $('#mainContainer').append(
        `
          <div style="background-color:black; width: 300px; height:50px; margin-bottom: 15px" class="bar${i} barEl"></div>
        `);
    }

    $('h1').css('background-color', 'blue');

}

$(function() {
  testAddBarGraph()
})

createAmountForm();


