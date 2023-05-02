let form = document.getElementById("form");  
let input = document.getElementById("input");
let msg = document.getElementById("msg"); 
let posts = document.getElementById("posts"); 

form.addEventListener("submit", function(click) {
  click.preventDefault();
  console.log("button clicked");
  formValidation();
});


let data = {};

function acceptData() {
  data["text"] = input.value;
  console.log(data);
  createPost();
}

function createPost() {
  // gets html Element
  const postElement = document.createElement("div");

  //a paragraph element to display the post text
  const textElement = document.createElement("p");
  textElement.textContent = data.text;

  //Uses a span element for post options
  const optionsElement = document.createElement("span");
  optionsElement.classList.add("options");

  //creates an edit button and attaches an event listener
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.addEventListener("click", function() {
    editPost(this);
  });

