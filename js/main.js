//
// function myFunc(str){
//   console.log(str + 'Jarvis');
//   // Create bar
//   var bar = document.createElement("bar");
//   document.body.appendChild(bar);
// }


// Refactor all this into one object called state
//
//

//Amount of bars
form1Data = {
  amountOfBars:0
};
// Values
form2Data = [];

// Configs / Options
var form3Data = {};

var formChartAxis = 'x'; // defaault value

// Element Selector
var form4Data = '#mainContainer';

function drawBarChart(dataArray, optionsObject, elementHtmlSelector ){

  var barAxis = formChartAxis;
  // IF X make a horizontal bar chart if Y make a vertical

  for (let i = 0; i < form1Data.amountOfBars; i++) {
    console.log('drawing bar chart');
    console.log(dataArray);
    var barValue = dataArray[i]; // needs to be updated to be more specific
    var barWidth = dataArray[i] * 60;
    var barHeight = form1Data.amountOfBars * 8;
    var barSpacing = form3Data['bar'+i].barSpacing;
    var barColour = form3Data['bar'+i].barColour;
    var labelColour = form3Data['bar'+i].labelColour;
    var labelPosValue = form3Data['bar'+i].labelPosition;


    var labelTopValue;
    //  A more accurate approach is to grab the element figure out it's height and divide in half and full
    if (labelPosValue === 'top') { labelTopValue = 0; }
    else if (labelPosValue  === 'middle') { labelTopValue = 42 }
    else if (labelPosValue === 'bottom') { labelTopValue = 84 }
    // var labelPosition = form3Data['bar'+i].labelPosition;

    $(elementHtmlSelector).append(`
      <div style="background-color:${barColour}; width: ${barWidth}; height:${barHeight}; margin-top: ${barSpacing}; transition: width 2s; " class="bar${i} barEl">
        <p class="labelTag" style="background-color: ${labelColour}; top: ${labelTopValue}%">Value=${barValue}</p>
       </div>
    `);
  }
}

// Refactor drawBarChart by using this and passing it parameters
function drawBar(){

}

function onUpdateTitle(){
  // Change the title settings
  var title = jQuery('input#title');
  // css('font-size',10)
  var newFontSize = jQuery('input#titleFontSize')[0].value;
  var newFontColor = jQuery('input#titleFontColor')[0].value;

  title = title.css('font-size', newFontSize).css('color', newFontColor);

  $('#titleConfigIcon').css('display', 'inline-block');
  //Remove the form
  jQuery('#titleConfigContainer').css('display', 'none');
}

function onTitleSettingsClick(){

  $('#titleConfigContainer').html(`
      <form id="configureTitleForm">
         Select your font size<br>
         <input id="titleFontSize" type="number" name="titleFontSize" value="40" placeholder="40"><br>
         Select your color<br>
         <input id="titleFontColor" type="text" name="titleFontColor" value="purple" placeholder="purple"><br>
         <button type="button" onclick="onUpdateTitle()">Update Title</button>
      </form>
  `);

  $('#titleConfigIcon').css('display', 'none');
  $('#titleConfigContainer').css('display','inline-block');
}

function onForm1Submit() {

    var amountOfBars = jQuery('form#form1 input')[0].value;
    form1Data.amountOfBars = amountOfBars;

    // Hide first form and create the next one
    $('form#form1').css('display', 'none');

    form1Data.amount = amountOfBars;
    createForm('form2', amountOfBars);
}

function onForm2Submit() {
  console.log('form 2 submit');

    var form2Input = $('#form2 input');

    for (var i = 0; i < form2Input.length ; i++) {
      var inputValue = form2Input[i].value;
      form2Data.push(inputValue);
    }

    //Hide form2 and create new one
    $('#form2').css('display','none');
    createForm('form3', form1Data.amount)
}

function onForm3Submit() {
  console.log('form 3 submit');
    var barListItems = jQuery('#form3 li input');

    //Get the axis
   formChartAxis = jQuery('select')[0].value;


    // Preset the object with input class as ids
  for(i=0; i< barListItems.length; i++) {
    var el = barListItems[i];
    form3Data[el.className] = {};
  }
  for(i=0; i< barListItems.length; i++) {
    var el = barListItems[i];
    var propertyName = el.name;
    var propertyValue = el.value;

      if (el.name ==='barColour'){
        form3Data[el.className][propertyName] = propertyValue;
      }

      if (el.name === 'labelColour') {
        form3Data[el.className][propertyName] = propertyValue;
      }

      if (el.name === 'barSpacing') {
        form3Data[el.className][propertyName] = propertyValue;
      }

      if (el.name === 'labelPosition') {
        form3Data[el.className][propertyName] = propertyValue;
      }
      console.log(form3Data, 'form3Data');

  }
    //Hide form2 and create new one
    $('#form3').css('display','none');

    createForm('form4', form1Data.amount)
}

function onForm4Submit(){

  // var htmlElementSelector = jQuery('input')[0].value;
  var htmlElementSelector = jQuery('#elementInput')[0].value;
  form4Data = htmlElementSelector;


  // //Hide form2 and create new one
  $('#form4').css('display','none');

  //Call function to make chart
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

  // Open tag
  $('#barFormContainer').html(`
      <div id="form2">
      <p> Enter Values </p>
      <form>
    `);
  // middle
  for (let i = 0; i < amountOfBars; i++) {
    // Dynamically create second form
    $('#form2').append(`
     
        <!--Enter Values by Bar: <br>-->
        bar ${i}:
        <input type="number" name="bar" placeholder="1" value =1>
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

  // Open tag
  $('#barFormContainer').html(`
      <div id="form3">
      <p> Enter Configuration </p>
        Choose your chart axis
        <select id="chartAxis">
          <option name="chartXAxis" value="chartX">chartX</option>
          <option name="chartYAxis" value="chartY">chartY</option>
        </select>
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
            Label Position:
            <input type="text" name="labelPosition" placeholder="top" value="top" class="bar${i}">
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
         Which HTML Element do you want to insert this into?<br>
         <input type="text" name="htmlElement" id="elementInput" value="#mainContainer" placeholder="#mainContainer"><br>
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

// sample maybe not use this factory
// function Bar(name, barValue) {
//   this.name = name;
//   this.barValue  = barValue;
//   this.barWidth = 200;
//   this.barHeight = 100;
//   this.barColour = 'black';
//   this.barLabelColour = 'silver';
//   this.barMarginSpacing = 15;
//   this.barTitle = '[Insert Name Here]';
// }

// function testAddBarGraph() {
//
//   // This is how you dynamically set up bar creation
//   // You may need to process it before inserting into DOM
//   // var bar1 = new Bar('test', 10);
//
//   console.log('test add', form1Data.amount);
//
//
//   //Static inserting in
//
//     for (let i = 0; i < form1Data.amount; i++) {
//       console.log('creating this many >', form1Data.amount);
//       console.log($('#mainContainer'))
//       $('#mainContainer').append(
//         `
//           <div style="background-color:black; width: 300px; height:50px; margin-bottom: 15px" class="bar${i} barEl"></div>
//         `);
//     }
//
// }

// $(function() {
//   // testAddBarGraph()
// });

function onStart(){
  createAmountForm();
}



