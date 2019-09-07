// the array of objects url
// every element is an object
// witch contains two properties
// name, and author.

let url = "https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520"

var sayings;
const getSay = () => {
  return $.ajax({
    type: 'GET',
    url: url,
    async: false,
    success: function(json) {
      sayings = JSON.parse(json);
    }
  })
}
getSay();
console.log(sayings);


// Get one quote and its author from
// array of objects.
const quoteObj = function(arr) {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index];
}

var obj;
// Bring a new quote.
const setQuote = () => {
  obj = quoteObj(sayings);
  $("#author").fadeOut(function() {
    $(this).text(obj.name);
    $(this).fadeIn();
  })

  $("#text").fadeOut( function() {
    $(this).text(obj.quote);
    $(this).fadeIn();
  });

}

const tweetRef = () => {
  $('#tweet-quote').attr('href',
  'https://twitter.com/intent/tweet?text='+ '"' + obj.quote + '" ' + obj.name);
}


// when the document is ready
// I can click the new Quote
// button.
$(document).ready(function(){
  setQuote();
  tweetRef();
  $("#new-quote").click(function () {
    setQuote();
    tweetRef();
  });
});
