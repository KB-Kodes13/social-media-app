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
  postElement.classList.add("container", "mt-2");           

  const cardElement = document.createElement("div");        // <div class="card">
  cardElement.classList.add("card");

  const cardBodyElement = document.createElement("div");    // <div class="card-body">
  cardBodyElement.classList.add("card-body");

  const flexElement = document.createElement("div");        // <div class="d-flex align-items-center">
  flexElement.classList.add("d-flex", "align-items-center");

  const infoElement = document.createElement("div");        // <div>

  const nameElement = document.createElement("h5");         // <h5 class="mt-0">Hectoria Gonzalez</h5>
  nameElement.classList.add("mt-0");
  nameElement.textContent = "Hector's World";

  const dateElement = document.createElement("p");
  dateElement.classList.add("currentDate", "text-sm");
  dateElement.id = "currentDate"; 
  dateElement.innerText = new Date().toDateString();


  const contentElement = document.createElement("p");       // <p>Just spent 10 minutes crafting the perfect tweet only to realize I have nothing interesting to say. Oops! 🤷‍♀️ #TimeWellWasted #SorryNotSorry </p>
  contentElement.textContent = data.text;

  const imgElement = document.createElement("img");         // <img src="https://images.squarespace-cdn.com/content/v1/6266f85818652d5c8e2ebf6b/1666109727997-HM8X7VNE6LMJ9RRUVQGU/Headshot%2BSq%2B%25281%2529.jpg?format=300w"
  const deleteButton = document.createElement("button");    // <button type="button" class="btn btn-outline-danger">
                                                            // <span class="bi bi-heart"></span> Like
                                                            // </button>




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

  infoElement.appendChild(nameElement);
  infoElement.appendChild(dateElement);
  infoElement.appendChild(contentElement);
  infoElement.appendChild(deleteButton);
  flexElement.appendChild(imgElement);
  flexElement.appendChild(infoElement);
  cardBodyElement.appendChild(flexElement);
  cardElement.appendChild(cardBodyElement);
  postElement.appendChild(cardElement);
  
  posts.insertBefore(postElement, posts.firstChild);
  




   // Get the tags input value
   const tagsInput = document.querySelector('.tagin');
   const tagsValue = tagsInput.value;
 
   // Split the tagsValue by comma and trim each tag
const tagsArray = tagsValue.split(",").map(tag => "#" + tag.trim());

   // Create a new element to wrap the tags and delete button
   const tagsDeleteWrapper = document.createElement("span");
 
   // Create a new element to display the tags
   const tagsElement = document.createElement("p");
   tagsElement.textContent = tagsArray.join(" ");
 
   // Append the tags element to the wrapper
   tagsDeleteWrapper.appendChild(tagsElement);
 
   // Append the delete button to the wrapper
   tagsDeleteWrapper.appendChild(deleteButton);
 
   // Append the wrapper to the info element
   infoElement.appendChild(tagsDeleteWrapper);





  tagsInput.value = "";
  input.value = "";
  tagsInput.value = "";







  input.value = "";
}





// This is the delete button to remove the post
function deletePost(button) {
  const postElement = button.closest(".container"); // below code does remove the content but .container removes the entire container
  postElement.remove();
  // button.parentElement.parentElement.parentElement.remove();
  // button.parentElement.parentElement.parentElement.style.display = "none";

}


// This is the edit post button 
function editPost(e) {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}



// 
