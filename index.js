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



const menu = document.querySelector('aside')
const menu_open_btn = document.querySelector('#menu')
const menu_close_btn = document.querySelector('#close')

menu_open_btn.onclick = () => {
    menu.style.right="0px"

}

menu_close_btn.onclick = () => {
    menu.style.right="-100%"

}

const quantInp = document.querySelector('.btns_inp')
const decreaseBtn = document.querySelector('.decrease')
const increaseBtn = document.querySelector('.increase')
const removeBtn = document.querySelector('.remove_btn')

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
