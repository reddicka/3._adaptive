// Для кнопки лайков
let like = document.querySelector('.like');
let likeCount = document.querySelector('.like-count');

// Для кнопки ломания
let lomalkaButton = document.querySelector('.lomalka-button');
let wrapper = document.querySelector('.wrapper');

// Для всего, что после ломания
let body = document.querySelector('body');
let htmlCode = '<div class="bidlo"><h1>ты чево наделал сука(9((<div class="sad"><div class="rot"></div></div></div>';

// Кнопка и счетчик лайков
like.onclick = function () {
    if (like.classList.contains('like--added')) {
        likeCount.textContent--;
    } else {
        likeCount.textContent++;  
    }

    like.classList.toggle('like--added');
}

// Ломание
lomalkaButton.onclick = function () {
    lomalkaButton.classList.toggle('lomalka-button--added');
    wrapper.remove();
    body.insertAdjacentHTML('afterbegin', htmlCode);
}