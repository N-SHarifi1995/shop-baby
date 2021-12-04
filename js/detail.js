let nam = document.querySelector('#name');
let code = document.querySelector('#code');
let category = document.querySelector('#category');
let price = document.querySelector('.price p');
let addButton = document.querySelector('.buy-part button');
let itemss = []
addButton.onclick = () => {

    itemss = JSON.parse(localStorage.getItem('item')) ? JSON.parse(localStorage.getItem('item')) : [];
    //console.log(itemss)

    const item = {
        color: document.querySelector('.rang:checked').value,
        size: document.querySelector('.sizee').value,
        id: document.querySelector('#code').innerHTML,
        name: document.querySelector('#name').innerText,
        src: document.querySelector('.monitor img').src,
        price: document.querySelector('.price p').innerHTML,
        category: document.querySelector('#category'),
    }
    console.log(item)
    itemss.push(item);
    localStorage.setItem('item', JSON.stringify(itemss));

}

var readItem = () => {
    const storag = localStorage.getItem('product');
    const product = JSON.parse(storag);
    return product
}
document.addEventListener('DOMContentLoaded', () => {

        const product = readItem()
        nam.innerHTML = product.name;
        code.innerHTML = product.id;
        nam.innerHTML = product.name;
        price.innerHTML = product.price;
        category.innerHTML = product.category;
        imgg.src = product.src;
        imgIndicators[0].src = product.src;

    })
    /////////////////////////////////////////////img zoom////////////////////////////////////////
let imgIndicators = document.querySelectorAll('.indi');
let monitor = document.querySelector('.monitor ');
let imgg = monitor.querySelector('img');

imgIndicators.forEach(img => {
    img.addEventListener('click', () => {
        monitor.style.backgroundImage = "url('" + img.src + "')"
        imgg.src = img.src

    })
});

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}