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
  '<img src="./img/img10.png">',
  '<img src="./img/img11.png">',
  '<img src="./img/img12.png">',
  '<img src="./img/img13.png">',
  '<img src="./img/img14.png">',
  '<img src="./img/img15.png">',
  '<img src="./img/img16.png">',
  '<img src="./img/img17.png">',
  '<img src="./img/img18.png">',
  '<img src="./img/img19.png">',
  '<img src="./img/img20.png">',
  '<img src="./img/img21.png">',
  '<img src="./img/img22.png">',
  '<img src="./img/img23.png">',
  '<img src="./img/img24.png">',
  '<img src="./img/img25.png">',
  '<img src="./img/img26.png">',
  '<img src="./img/img27.png">',
  '<img src="./img/img28.png">',
  '<img src="./img/img29.png">',
  '<img src="./img/img30.png">',
  '<img src="./img/img31.png">',
  '<img src="./img/img32.png">',
  '<img src="./img/img33.png">',
  '<img src="./img/img34.png">',
  '<img src="./img/img35.png">',
  '<img src="./img/img36.png">',
  '<img src="./img/img37.png">',
  '<img src="./img/img38.png">',
  '<img src="./img/img39.png">'

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
