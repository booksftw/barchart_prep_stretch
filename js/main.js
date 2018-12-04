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

//Amount of bars
form1Data = {
  amountOfBars:0
};
// Values
form2Data = [];

// Configs / Options
var form3Data = {};

// Element Selector
var form4Data = '#mainContainer';

function drawBarChart(dataArray, optionsObject, elementHtmlSelector ){
  console.log('drawing bar chart');

  for (let i = 0; i < form1Data.amountOfBars; i++) {
    var barValue = dataArray[i];
    var barWidth = dataArray[i] * 100;
    var barHeight = form1Data.amountOfBars * 10;
    console.log(barWidth);
    $(elementHtmlSelector).append(`
      <div style="background-color:black; width: ${barWidth}; height:${barHeight}; margin-bottom: 15px" class="bar${i} barEl"><p>Value=${barValue}</p></div>
    `);
  }
}


function onForm1Submit() {

    var amountOfBars = jQuery('form#form1 input')[0].value;
    form1Data.amountOfBars = amountOfBars;
    console.log(amountOfBars, 'FORM ONE SUBMIT');

    // Hide first form and create the next one
    $('form#form1').css('display', 'none');

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
    // A light reminder that you still need to create form 4 and 5 and maybe hide the chart until the end.

    var barListItems = jQuery('#form3 li input');
    var barListItemsLength= barListItems.length;

    // Preset the object with input class as ids
  for(i=0; i< barListItems.length; i++) {
    var el = barListItems[i];
    form3Data[el.className] = {};
    console.log(form3Data, 'form3 data');
  }
  for(i=0; i< barListItems.length; i++) {
    var el = barListItems[i];
    var propertyName = el.name;
    var propertyValue = el.value;

    console.log(el.className, el.name, el.value);
      if (el.name ==='barColour'){
        form3Data[el.className][propertyName] = propertyValue;
      }

      if (el.name === 'labelColour') {
        form3Data[el.className][propertyName] = propertyValue;
      }

      if (el.name === 'barSpacing') {
        form3Data[el.className][propertyName] = propertyValue;
      }
      console.log(form3Data, 'form3Data');

  }
    //Hide form2 and create new one
    $('#form3').css('display','none');

    createForm('form4', form1Data.amount)
}

function onForm4Submit(){

  var htmlElementSelector = jQuery('input')[0].value;
  form4Data = htmlElementSelector;

  // //Hide form2 and create new one
  $('#form4').css('display','none');

  //Call function to make chart
  console.log("HERE@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log(form2Data, form3Data, form4Data);
  drawBarChart(form2Data, form3Data, form4Data);
}



// Instead form1,2,3, name variables based functionality.
function createAmountForm() {

  $('#barFormContainer').html(`
      <form id="form1">
         How many bars?<br>
         <input type="number" name="barAmount" value="s"><br>
         <button type="button" onclick="onForm1Submit()">Enter</button>
      </form>
  `);
  console.log('Generating the amount form');
}

function createValuesForm(args) {
  let amountOfBars = args;
  // Generate this many bars
  console.log(amountOfBars, 'generate this many bars for VALUES FORM');

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

    $('#form2').css('display', 'inline-block');
  }

  // Close tag
  $('#form2').append(`
     <button type="button" onclick="onForm2Submit()">Submit</button>
     </form>
     </div>
     `)
}

function createConfigForm(args) {
  $('#form3').css('display', 'inline-block');

  let amountOfBars = args;
  // Generate this many bars
  console.log(amountOfBars, 'Form 3 mount');

  // Open tag
  $('#barFormContainer').html(`
      <div id="form3">
      <p> Enter Configuration </p>
      <form>
    `);
  // middle
  for (let i = 0; i < amountOfBars; i++) {
    // Dynamically create second form
    $('#form3').append(`
 
        <ul id=bar${i}>
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

function createHtmlElementForm(){
  $('#barFormContainer').html(`
      <form id="form4">
         Which HTML Element do you want to inser this into?<br>
         <input type="text" name="htmlElement" value="#mainContainer" placeholder="#mainContainer"><br>
         <button type="button" onclick="onForm4Submit()">Make my chart!</button>
      </form>
  `);
  console.log('Generating the amount form');
}

function createForm(name, args) {
  // Create functions instead of these conditions
  //
  if (name === 'form2') {
    createValuesForm(args);
  }// close form 2

  if (name === 'form3') {
    createConfigForm(args);
  }

  if (name === 'form4') {
    createHtmlElementForm();
  }

}

// FORM END
//
//
//






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
});

function onStart(){
  createAmountForm();
}



