// header

const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const itemWidth = 300
const padding = 100
prev.addEventListener('click',()=>{
    list.scrollLeft -= itemWidth + padding
  })
  
  next.addEventListener('click',()=>{
    list.scrollLeft += itemWidth + padding
  })










