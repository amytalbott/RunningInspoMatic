// On page load, hide 'Give me another one!' button
//
$('#another').hide();
// When the user clicks the 'Yes, give me one!'
// button, display a random quote

var quotes = [
  '<img src="./img/img0.png">',
  '<img src="./img/img1.png">',
  '<img src="./img/img2.png">',
  '<img src="./img/img3.png">',
  '<img src="./img/img4.png">',
  '<img src="./img/img5.png">',
  '<img src="./img/img6.png">',
  '<img src="./img/img7.png">',
  '<img src="./img/img8.png">',
  '<img src="./img/img9.png">',
  // 'Run until you stop',
  // 'Every mile you run gets you 1.6 km closer to your goal.',
  // 'The next time you feel like quitting, find a way not to somehow.',
  // "You can't stop running until you start.",
  // "You'll never know how far you can go without a measuring device of some sort.",
  // 'A goal without go is just al.'
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
  '<img src="./img/img0.png">',
  '<img src="./img/img1.png">',
  '<img src="./img/img2.png">',
  '<img src="./img/img3.png">',
  '<img src="./img/img4.png">',
  '<img src="./img/img5.png">',
  '<img src="./img/img6.png">',
  '<img src="./img/img7.png">',
  '<img src="./img/img8.png">',
  '<img src="./img/img9.png">',
  // 'Run until you stop',
  // 'Every mile you run gets you 1.6 km closer to your goal.',
  // 'The next time you feel like quitting, find a way not to somehow.',
  // "You can't stop running until you start.",
  // "You'll never know how far you can go without a measuring device of some sort.",
  // 'A goal without go is just al.'
]

function anotherQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
