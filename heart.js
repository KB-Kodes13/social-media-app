const likeBtns = document.querySelectorAll('.heart-icon');
const numberOfLikesElements = document.querySelectorAll('.number-of-likes');

likeBtns.forEach((likeBtn, index) => {
  let numberOfLikes = Number.parseInt(numberOfLikesElements[index].textContent, 10);
  let isLiked = false;
  
  const likeClick = () => {
    if (!isLiked) {
      likeBtn.classList.add('isLiked');
      likeBtn.textContent = '💖';
      numberOfLikes++;
      numberOfLikesElements[index].textContent = numberOfLikes;
      isLiked = !isLiked;
    } else {
      likeBtn.classList.remove('isLiked');
      likeBtn.textContent = '🤍';
      numberOfLikes--;
      numberOfLikesElements[index].textContent = numberOfLikes;
      isLiked = !isLiked;
    }
  };
  //Event Listener
  likeBtn.addEventListener('click', likeClick);
});

// https://jssecrets.com/how-to-create-javascript-like-button/