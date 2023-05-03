let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let data = {};

form.addEventListener("submit", function(click) {
  click.preventDefault();
  console.log("button clicked");
  formValidation();
});

function savePostToLocalStorage(post) {
  // Check if local storage is supported by the browser
  if (typeof Storage !== "undefined") {
    // Get existing posts from local storage or initialize an empty array
    let existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

    // Add the new post to the array
    existingPosts.push(post);

    // Save the updated array to local storage
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    console.log("Post saved to local storage");
  } else {
    console.log("Local storage is not supported");
  }
}


function formValidation() {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
}


function acceptData() {
  data["text"] = input.value;
  console.log(data);
  createPost();
}

function createPost() {
  const postElement = document.createElement("div");
  const cardElement = document.createElement("div");
  const cardBodyElement = document.createElement("div");
  const flexElement = document.createElement("div");
  const infoElement = document.createElement("div");
  const nameElement = document.createElement("h5");
  const contentElement = document.createElement("p");
  const imgElement = document.createElement("img");
  const deleteButton = document.createElement("button");

  postElement.classList.add("container", "mt-2");
  cardElement.classList.add("card");
  cardBodyElement.classList.add("card-body");
  flexElement.classList.add("d-flex", "align-items-center");
  nameElement.classList.add("mt-0");
  nameElement.textContent = "Hector";

  contentElement.textContent = data.text;

  imgElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStFUDoHmgiJsNmVzW8SA24d7Nx-t7PritGkHjwFIk&s";
  imgElement.classList.add("me-3", "rounded-circle", "profile-picture");
  imgElement.alt = "Profile Picture";
  imgElement.style.width = "50px";

  deleteButton.type = "button";
  deleteButton.classList.add("btn", "btn-outline-danger");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    deletePost(this);
  });

  infoElement.appendChild(nameElement);
  infoElement.appendChild(contentElement);
  infoElement.appendChild(deleteButton);
  flexElement.appendChild(imgElement);
  flexElement.appendChild(infoElement);
  cardBodyElement.appendChild(flexElement);
  cardElement.appendChild(cardBodyElement);
  postElement.appendChild(cardElement);
  
  posts.insertBefore(postElement, posts.firstChild);
  
  input.value = "";
}






function deletePost(button) {
  const postElement = button.closest(".container"); // below code does remove the content but .container removes the entire container
  postElement.remove();
  // button.parentElement.parentElement.parentElement.remove();
  // button.parentElement.parentElement.parentElement.style.display = "none";

}

function editPost(e) {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}


// Looks crazy but we cascade down, 
// class container mt-2
// div class card
// div class card body
// div class dflex align items center
// img of your logo
// div
// button
// H5 content and p and button 
// 