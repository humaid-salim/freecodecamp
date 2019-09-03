// Simple array of Objects.
// every element in the array is
// and object with two properties:
//   "saying" which the Quote
//   "sayer" which is the auther
const sayings = [
  {"saying":"hello world", "sayer": "every coder"},
  {"saying":"get up", "sayer": "dad"},
  {"saying":"where have you been?", "sayer": "my bros"}
]

// ???
const quoteObj = (arr) => {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index];
}

// ???
const setQuote = () => {
  let obj = quoteObj(sayings);
  $("#text").text(obj.saying);
  $("#auther").text(obj.sayer);
}

// when the document is ready
// I can click the new Quote
// button.
$(document).ready(function(){
  $("#new-quote").click(function () {
    setQuote();
    console.log("button is working")
  });
});
