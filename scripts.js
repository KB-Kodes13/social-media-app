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


const tagin = new Tagin(document.querySelector('.tagin'), {

})


// This is Local Storage Assignment
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
    input.style.borderColor = "red";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    input.style.borderColor = "grey";
    acceptData();
  }
}


function acceptData() {
  data["text"] = input.value;
  console.log(data);
  createPost();
}




// This is the createPost function that kicks off when you click POST button. 
function createPost() {
  const postElement = document.createElement("div");        // <div class="container mt-2">
  const cardElement = document.createElement("div");        // <div class="card">
  const cardBodyElement = document.createElement("div");    // <div class="card-body">
  const flexElement = document.createElement("div");        // <div class="d-flex align-items-center">
  const infoElement = document.createElement("div");        // <div>
  const nameElement = document.createElement("h5");         // <h5 class="mt-0">Hectoria Gonzalez</h5>
  const dateElement = document.createElement("span");       // <span>date
  const contentElement = document.createElement("p");       // <p> my tweet
  const imgElement = document.createElement("img");         // <img src="https://images.squarespace-cdn.com/content/v1/6266f85818652d5c8e2ebf6b/1666109727997-HM8X7VNE6LMJ9RRUVQGU/Headshot%2BSq%2B%25281%2529.jpg?format=300w"
  const deleteButton = document.createElement("button");    // <button type="button" class="btn btn-outline-danger">
  const editButton = document.createElement("button");
  const tagsInput = document.querySelector('.tagin');                       // Get the tags input value
  const tagsValue = tagsInput.value;
  const tagsArray = tagsValue.split(",").map(tag => "#" + tag.trim());      // Split the tagsValue by comma and trim each tag
  const tagsDeleteWrapper = document.createElement("span");                 // Create a new element to wrap the tags and delete button
  const tagsElement = document.createElement("p");                          // Create a new element to display the tags
  const heartbutton = document.createElement("button");
  const heartSpan = document.createElement("span");
  const likesSpan = document.createElement("span");
  
  contentElement.textContent = data.text;
  postElement.classList.add("container", "mt-2");
  cardElement.classList.add("card");
  cardBodyElement.classList.add("card-body");
  flexElement.classList.add("d-flex", "align-items-center");
  nameElement.classList.add("mt-0");
  nameElement.textContent = "Hector's World";
  dateElement.classList.add("currentDate", "text-sm");
  dateElement.id = "currentDate";
  dateElement.innerText = new Date().toDateString();

  imgElement.src = "https://images.squarespace-cdn.com/content/v1/6266f85818652d5c8e2ebf6b/1666109727997-HM8X7VNE6LMJ9RRUVQGU/Headshot%2BSq%2B%25281%2529.jpg?format=300w";
  imgElement.classList.add("me-3", "rounded-circle", "profile-picture");
  imgElement.alt = "Profile Picture";
  imgElement.style.width = "50px";

  deleteButton.type = "button";
  deleteButton.classList.add("btn", "btn-outline-danger");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    deletePost(this);
  });

  editButton.type = "button";
  editButton.classList.add("btn", "btn-outline-danger");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function() {
    editPost(this);
  });

  heartbutton.type = "button";
  heartbutton.classList.add("btn", "btn-outline-danger");

  heartSpan.classList.add("heart-icon");
  heartSpan.textContent = "🤍";

  likesSpan.classList.add("number-of-likes");
  likesSpan.textContent = "0";

  infoElement.appendChild(nameElement);
  infoElement.appendChild(dateElement);
  infoElement.appendChild(contentElement);

  flexElement.appendChild(imgElement);
  flexElement.appendChild(infoElement);
  cardBodyElement.appendChild(flexElement);
  cardElement.appendChild(cardBodyElement);
  postElement.appendChild(cardElement);
  heartbutton.appendChild(heartSpan);
  heartbutton.appendChild(likesSpan);

  posts.insertBefore(postElement, posts.firstChild);

  tagsElement.textContent = tagsArray.join(" ");
  tagsDeleteWrapper.appendChild(tagsElement);                               // Append the tags element to the wrapper
  infoElement.appendChild(tagsDeleteWrapper);                               // Append the wrapper to the info element
  tagsDeleteWrapper.appendChild(deleteButton);                              // Append the delete button to the wrapper
  infoElement.appendChild(heartbutton)
  infoElement.appendChild(editButton);
  infoElement.appendChild(deleteButton);

  
  tagsInput.value = "";  //testing
  // input.value = "";
  // tagsInput.value = "";  //testing
  input.value = "";
}


// This is the delete button to remove the post
function deletePost(button) {
  const postElement = button.closest(".container"); // below code does remove the content but .container removes the entire container
  postElement.remove();
}

function editPost(button) {
  const postElement = button.closest(".container");
  const postContent = postElement.querySelector(".card-body p").textContent;
  input.value = postContent;
  postElement.remove();
}

