// On page load, hide 'Give me another one!' button
//
$('#another').hide();
// When the user clicks the 'Yes, give me one!'
// button, display a random quote

var quotes = [
  'This is a quote',
  'This is another quote',
  'Also a quote',
  'Still a quote',
  'Run',
  'Go running'
]

function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

// Then show the 'Give me another one!' button

$("#quoteButton").click(function(){
  $('#another').show();
});
// When the user clicks the 'Give me another one!' button,
// display a random quote

var quotes = [
  'This is a quote',
  'This is another quote',
  'Also a quote',
  'Still a quote',
  'Run',
  'Go running'
]

function anotherQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
