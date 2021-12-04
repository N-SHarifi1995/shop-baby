let type = document.querySelectorAll('.type-btn');
console.log(type)
let span = document.querySelector('.span');
let boxes = document.querySelectorAll('.box');
let category;
document.addEventListener('DOMContentLoaded', () => {
    category = JSON.parse(localStorage.getItem('category'))
    boxes.forEach(box => {
        box.classList.remove('show');
        if (box.getAttribute('category') === category) {
            box.classList.add('show');

        }
    })




})
type.forEach(type => {
        type.addEventListener('click', () => {

            boxes.forEach(box => {
                box.classList.remove('show');
            })
            if (type.getAttribute('category') == 'girl') {
                span.style.right = 0;
                boxes.forEach(box => {
                    if (box.classList.contains('girl') && box.getAttribute('category') == category) {
                        box.classList.add('show');
                    }
                })
            } else if (type.getAttribute('category') == 'boy') {
                span.style.right = 6 + 'vw';
                boxes.forEach(box => {
                    if (box.classList.contains('boy') && box.getAttribute('category') == category) {
                        box.classList.add('show');
                    }
                })
            } else {
                console.log('hi')
            }
        })

    })
    /////////////////////buy/////////////////////////////////////
let buyButton = document.querySelectorAll('.buy');

buyButton.forEach(but => {
    but.addEventListener('click', () => {

        creatobject(but);
        window.open("product-detail.html");
    })
})

function creatobject(el) {
    let parent = el.parentNode.parentNode;

    let product = {
        id: parent.querySelector('#id').innerHTML,
        name: parent.querySelector('p').innerText,
        src: parent.querySelector('img').src,
        price: parent.querySelector('.price').innerHTML,
        category: parent.getAttribute('category'),
        size: null,
        count: null,
        color: ""
    }
    console.log(product)
    localStorage.setItem('product', JSON.stringify(product));
    const storagb = localStorage.getItem('product');
    const productb = JSON.parse(storagb);
    console.log(productb)
}
///////////////////////////product-detail/////////////////////////////////////////