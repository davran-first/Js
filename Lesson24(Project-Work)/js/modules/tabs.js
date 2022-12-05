export {
    notesCategoriesBtn,
    notesContentItem
}

let notesCategoriesBtn = document.querySelectorAll('.notes-categories__btn')
let notesContentItem = document.querySelectorAll('.notes-content__item')

notesCategoriesBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let currentBtnId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(currentBtnId)


        if (!currentBtn.classList.contains('active')) {

            notesCategoriesBtn.forEach((item) => {
                item.classList.remove('active')
            })

            notesContentItem.forEach((item) => {
                item.classList.remove('active')
            })

            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }

    })
})

document.querySelector('.notes-categories__btn').click() /// по умолчанию клик