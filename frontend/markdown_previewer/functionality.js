const initText = `

# This is the Mark down Previewer!

Check the Markdown [Cheat sheet](https://www.markdownguide.org/cheat-sheet)

##### Here is some inline code:
\`let greeting = "Hello!"\`


##### block code:
\`\`\`
 let name = "Humaid";
 let hobby = "volleyball";
\`\`\`
> 'This is a sblock quote'

#### To-do:
- Buy milk.
- Wash clothes.

**awesome sport:**

![best sport](https://images.unsplash.com/photo-1521138054413-5a47d349b7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80)

## cool table:

| Days          | tasks     | hour    |
| :------------ |:---------:| -------:|
| Sunday        | wake up   | 4:30 am |
| Monday        | play      | 5:00 pm |
| Tuesday       | sleep     |11:00 pm |

`
const options = {
  gfm: true,
  breaks: true
}
const view = () => {
  let input = document.getElementById("editor").value;
  document.getElementById("preview").innerHTML = marked(input, options);
}

const reset = () => {
  document.getElementById("editor").value = "";
}

window.addEventListener('load', function() {
  console.log('All assets are loaded')
  document.getElementById("editor").value = initText;
  view();
});
