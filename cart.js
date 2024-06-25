const item = document.createElement('div')
const head = document.createElement('h1')
const menu_item = document.createElement('div')
const menu_left = document.createElement('div')
const img = document.createElement('div')
const btns = document.createElement('div')
const decrease = document.createElement('button')
const btns_inp = document.createElement('input')
const increase = document.createElement('button')
const menu_right = document.createElement('div')
const price = document.createElement('span')
const remove_btn = document.createElement('button')

const scrollable_list = document.querySelector('.scrollable-list')


item.classList.add('item')
head.classList.add('head')
head.innerText = "Cozy socks"
menu_item.classList.add('menu_item')
menu_left.classList.add('menu_left')
img.classList.add('img')
btns.classList.add('btns')
decrease.classList.add('decrease')
btns_inp.classList.add('btns_inp')
increase.classList.add('increase')
menu_right.classList.add('menu_right')
price.innerText = "$29.99"
remove_btn.innerText = "Remove"
remove_btn.classList.add('remove_btn')
decrease.innerText = "-"
increase.innerText = "+"
btns_inp.value = "1"


scrollable_list.append(item)
item.append(head, menu_item)
menu_item.append(menu_left, menu_right)
menu_left.append(img, btns)
btns.append(decrease, btns_inp, increase)
menu_right.append(price, remove_btn)
