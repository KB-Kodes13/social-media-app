const likeBtn = document.querySelector('.heart-icon');
const numberOfLikesElement = document.querySelector('.number-of-likes');
let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
let isLiked = false;
// Functions
const likeClick = () => {
  if (!isLiked) {
  likeBtn.classList.add('isLiked');
  likeBtn.textContent = '💖'; /* Change the heart icon to sparkling heart */
  numberOfLikes++;
  numberOfLikesElement.textContent = numberOfLikes;
  isLiked = !isLiked;
  } else {
  likeBtn.classList.remove('isLiked');
  likeBtn.textContent = '🤍'; /* Change the heart icon back to white heart */
  numberOfLikes--;
  numberOfLikesElement.textContent = numberOfLikes;
  isLiked = !isLiked;
 }
};
// Event Listeners
likeBtn.addEventListener('click', likeClick);
// https://jssecrets.com/how-to-create-javascript-like-button/