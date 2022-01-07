let like = document.querySelector('.like');
let likeCount = document.querySelector('.like-count');

let counter = 0;

like.onclick = function () {
    counter++;
    likeCount.textContent = counter;
    
}