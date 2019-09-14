const view = () => {
  let input = document.getElementById("editor").value;
  document.getElementById("preview").innerHTML = marked(input);
}

const reset = () => {
  document.getElementById("editor").value = "";
}
