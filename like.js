let like = document.querySelector('.like');
let likeCount = document.querySelector('.like-count');


like.onclick = function () {
    
    if (like.classList.contains('like-added')) {
        likeCount.textContent--;
    } else {
        likeCount.textContent++;  
    }

    like.classList.toggle('like-added');
    
}