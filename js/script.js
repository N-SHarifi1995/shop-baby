let imges = document.querySelector('.img-box').children;
let indiactores = document.querySelector('.indicator ul').children;
let index = 0;
let timer;
document.addEventListener('DOMContentLoaded', () => {
    timer = setInterval(update, 4000);
})

function next() {
    if (index >= imges.length - 1) {
        index = 0
    } else {
        index++
    }
}

function change() {
    for (let j = 0; j < imges.length; j++) {
        imges[j].classList.remove('active');

    }
    imges[index].classList.add('active');
}

function update() {
    next();
    change();
    changeIndi()
}

function changeIndi() {
    for (let j = 0; j < indiactores.length; j++) {
        indiactores[j].classList.remove('active');

    }

    indiactores[index].classList.add('active');
}

for (let i = 0; i < indiactores.length; i++) {
    indiactores[i].addEventListener('click', () => {
        clearInterval(timer);

        index = indiactores[i].getAttribute('id') - 1;
        change();
        changeIndi();
        timer = setInterval(update, 4000);
    });

}

//     ///////////////////////////////////////////////////////////////////////////let probox = document.querySelector('.probox');



let probxes = document.querySelectorAll('.probox')
let leftBtn = document.querySelectorAll('.left');
let rightBtn = document.querySelectorAll('.right');
let boxes = document.querySelectorAll('.box');
let boxes5 = document.querySelectorAll('.box-5');
leftBtn.forEach(left => {
    left.addEventListener('click', () => {
        let probox = left.parentElement;
        probox.scrollLeft -= 125
    })
})
rightBtn.forEach(right => {
    right.addEventListener('click', () => {
        let probox = right.parentElement;
        probox.scrollLeft += 125
    })
});
let player = setInterval(play, 50);

function play() {
    probxes.forEach(probox => {
        let slidermaxscrollwid5 = probox.scrollWidth - probox.clientWidth;
        if (probox.scrollLeft == 1) {
            probox.scrollLeft -= slidermaxscrollwid5
        } else {
            probox.scrollLeft += 1;
        }
    })
}
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        clearInterval(player)

    })
    box.addEventListener('mouseout', () => {
        player = setInterval(play, 50);


    })
})
boxes5.forEach(box => {
        box.addEventListener('mouseover', () => {
            clearInterval(player)

        })
        box.addEventListener('mouseout', () => {
            player = setInterval(play, 50);


        })
    })
    /////////////////////////////////////expanded menue/////////////////////////////
let menue = document.querySelector('.expanded-menue');
let close = menue.querySelector('.fa-close');
let menueBtn = document.querySelector('.menue');
menueBtn.onclick = () => {
    menue.classList.add('active');
}
close.onclick = () => {
        menue.classList.remove('active');
    }
    /////////////////////////////////////filtter  product in product/////////////////////////////let buyButton = document.querySelectorAll('.buy');
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
    console.log(productb);
}
/////////////////////////////////////////////////
let counter = document.querySelector('.shopp');
counter.onclick = () => { window.open('basket.html') }
document.addEventListener('DOMContentLoaded', () => {
    counter.setAttribute('num', JSON.parse(localStorage.getItem('totalcount')))
})


///////////////////////////////////for count Number////////////////////////////////////////
window.addEventListener('storage', () => { counter.setAttribute('num', JSON.parse(localStorage.getItem('totalcount'))) });
////////////////////////////////////for menu//////////////////////////
const selection = document.querySelectorAll('nav li a');
selection.forEach(item => {
    item.addEventListener('click', function() {
        const category = item.getAttribute('category');
        localStorage.setItem('category', JSON.stringify(category))
        window.open('product.html')
    })
})