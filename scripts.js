let form = document.getElementById("form");  
let input = document.getElementById("input");
let msg = document.getElementById("msg"); 
let posts = document.getElementById("posts"); 


let data = {};

function acceptData() {
  data["text"] = input.value;
  console.log(data);
  createPost();
}
