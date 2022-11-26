const modalShowBtn = document.querySelectorAll('.js-modal-show'),
  modal = document.querySelectorAll('.js-modal'),
  modalCloseBtn = document.querySelectorAll('.js-modal-close'),
  modalInner = document.querySelectorAll('.modal-inner')

// дать кнопке класс 
const showModal = (i, e) => {
  e.preventDefault()
  document.body.style = 'overflow: hidden'
  document.querySelector(`[data-modal='${i}']`).classList.add('active')
}

const resetModal = () => {
  document.body.style = 'overflow: auto'
  modal.forEach(modal => {
    modal.classList.remove('active')
  })
}

modalShowBtn.forEach((btn, i) => {
  btn.addEventListener('click', (e) => showModal(i, e))
})

modalCloseBtn.forEach(btn => {
  btn.addEventListener('click', resetModal)
})

modal.forEach(item => {
  item.addEventListener('click', (e) => {
    resetModal()
  })
})

modalInner.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation()
  })
})