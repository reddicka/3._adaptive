let like = document.querySelector('.like');
let likeCount = document.querySelector('.like-count');

let lomalkaButton = document.querySelector('.lomalka-button');
let wrapper = document.querySelector('.wrapper');

let body = document.querySelector('body');
let lastText = document.createElement('p');

like.onclick = function () {
    
    if (like.classList.contains('like--added')) {
        likeCount.textContent--;
    } else {
        likeCount.textContent++;  
    }

    like.classList.toggle('like--added');
}


lomalkaButton.onclick = function () {
    lomalkaButton.classList.toggle('lomalka-button--added');
    wrapper.remove();

    body.classList.add('body-fail');
    lastText.textContent = 'ты чево наделал сука(9((';
    body.appendChild(lastText);
}