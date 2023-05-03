function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let posts = document.querySelectorAll('.card');

  for (let i = 0; i < posts.length; i++) {
    let author = posts[i].querySelector('h5');
    let content = posts[i].querySelector('p');
    let authorValue = author.innerHTML || author.innerText || author.textContent;
    let contentValue = content.innerHTML || content.innerText || content.textContent;

    if (
      authorValue.toUpperCase().includes(filter) ||
      contentValue.toUpperCase().includes(filter)
    ) {
      posts[i].style.display = "";
    } else {
      posts[i].style.display = "none";
    }
  }
}
