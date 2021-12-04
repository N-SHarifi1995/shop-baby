let counter = document.querySelector('.shopp');
let count;
document.addEventListener('DOMContentLoaded', () => {
    counter.setAttribute('num', JSON.parse(localStorage.getItem('totalcount')))
    const item = localStorage.getItem('item');
    let allItem = JSON.parse(item);
    console.log(allItem)

    allItem.forEach(element => {
        let container = document.querySelector('.items')
        container.insertAdjacentHTML('afterbegin', `  <div class="item">
            <div class="frame"> <img src="${element.src}" alt=""></div>

            <div class="info">
                <p class="name"><span>کالا:  </span>${element.name}</p>
                <p class="code">${element.id}</p>
                <p class="size"> <span>سایز: </span>${element.size}</p>
               <span>قیمت: </span> <p class="price">${element.price}</p>
              

            </div>
            <div class="contorols">
                <a href="#"><i class="fa fa-plus"></i></a>
                <p class="count">1</p>
                <a href="#"><i class=" fa fa-minus"></i></a>
            </div>
            <div class="delete">
                <a href="#"><i class="fa fa-trash"></i></a>
            </div>
        </div>`);



    });


    update();
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.querySelector('.fa-plus').onclick = () => {
            let countr = Number(item.querySelector('.count').innerHTML);
            countr++;
            item.querySelector('.count').innerHTML = countr;
            update()
        };
        item.querySelector('.fa-minus').onclick = () => {
            let countr = Number(item.querySelector('.count').innerHTML);
            if (countr == 1) {
                item.querySelector('.count').innerHTML = 1;
            } else { countr-- }

            item.querySelector('.count').innerHTML = countr;
            update();


        }
        item.querySelector('.fa-trash').onclick = () => {;
            allItem = allItem.filter(it => it.id !== item.querySelector('.code').innerHTML);
            console.log(allItem);
            localStorage.setItem('item', JSON.stringify(allItem));
            item.remove()
            update();


        }
    });
})
window.addEventListener('storage', () => { document.location.reload(true) });



function update() {
    let total = 0;
    count = 0;
    let items = document.querySelectorAll('.item');
    let totalprice = document.querySelector('.totalprice');
    let totalcount = document.querySelector('.totalcount');

    items.forEach(item => {

        total += item.querySelector('.count').innerHTML * item.querySelector('.price').innerHTML;
        count += +item.querySelector('.count').innerHTML;
    })
    totalprice.innerHTML = total;
    totalcount.innerHTML = count;
    counter.setAttribute('num', count)
    localStorage.setItem('totalcount', JSON.stringify(count));
}




///////////////////////////////////for count Number////////////////////////////////////////