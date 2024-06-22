const place = document.querySelector('.container')
const sorted = arr.toSorted((a,b) => a.price - b.price)
const five = document.querySelector('.five')
const all = document.querySelector('.all')

function displayItems(data) {
  
    place.innerHTML = ""

    for (let item of data) {
    
        const component = Item(item)
    
        place.append(component)
    }
    
}

displayItems(sorted)

five.onclick = () => {
    displayItems(sorted.slice(0,5))
}
all.onclick = () => {
    displayItems(sorted)
}


const open_btn = document.querySelector('.menu')
const close_btn = document.querySelector('[data-close]')
const modal = document.querySelector('.modal')



open_btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }

close_btn.onclick = () => {
    modal.classList.remove('show')
}






const quantInp = document.querySelector('#quantity')
const decreaseBtn = document.querySelector('.decrease')
const increaseBtn = document.querySelector('.increase')
const removeBtn = document.querySelector('.remove')

decreaseBtn.onclick = () => {
    let current = +(quantInp.value);
    if (current > 1) {
        quantInp.value = current - 1;
    }
};


increaseBtn.onclick = () => {
    let current = +(quantInp.value);
    quantInp.value = current + 1;
};

removeBtn.onclick = () => {
    alert('Item removed');
};

