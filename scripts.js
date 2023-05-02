let form = document.getElementById("form");  
let input = document.getElementById("input");
let msg = document.getElementById("msg"); 
let posts = document.getElementById("posts"); 

form.addEventListener("submit", function(click) {
  click.preventDefault();
  console.log("button clicked");
  formValidation();
});
function formValidation() {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
}

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

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", function() {
    deletePost(this);
  });
  
  // Append the buttons to the options element
  optionsElement.appendChild(editButton);
  optionsElement.appendChild(deleteButton);
  
  // Appending the post text and options to the post element
  postElement.appendChild(textElement);
  postElement.appendChild(optionsElement);
(
  // Append the post element to the posts container
  posts.appendChild(postElement);

  // Clear the input value
  input.value = "";
}

  function deletePost(e) {
  e.parentElement.parentElement.remove();
}

