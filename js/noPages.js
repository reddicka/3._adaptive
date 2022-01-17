document.addEventListener("click", event => piska(event));

function piska(event) {
    if (event.target.innerText == "...") {
        alert('В очько себе тыкни, даун');
    }
} 

/*
console.log('Link: ' + link.href);
console.log('Attribute: ' + link.getAttribute('href'));
console.log('Text: ' + link.innerText);


for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("Ссылка на архив: " + elem.href );
    }
*/