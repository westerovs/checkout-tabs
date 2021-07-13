/*
2 способ (data атрибуты)
Алгоритм:
    1 Устанавливаем active классы через JS в функции init
    2 Скрываем в CSS все блоки контента, кроме активного
    3 в JS обрабатываем клик по кнопкам
    4 При клике:
        - считываем содержимое дата атрибутов
        - проверяем содержание active класса, что бы избежать лишних вызовов ф-ций
        - очищаем циклом все active - классы у кнопок и у блок-контента
            для этого напишем функцию очистки классов
        - устанавливаем новый активный класс
            для этого напишем функцию установки активного класса
*/

const tabItems = document.querySelectorAll('.tab-item')
const contentItems = document.querySelectorAll('.content-item')

const findClearActiveClass = (elements, className = 'is-active') => {
    Array.from(elements).find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
    element[index].classList.add(`${ className }`)
}

const checkoutTabs = (item) => {
    item.addEventListener('click', (e) => {
    
        let data = e.target.dataset.slide - 1
        
        if (item.classList.contains('is-active')) return
    
        const currentItem = data
        
        findClearActiveClass(tabItems)
        findClearActiveClass(contentItems)
    
        setActiveClass(tabItems, currentItem)
        setActiveClass(contentItems, currentItem)
    })
}

const initTabs = (num) => {
    setActiveClass(tabItems, num)
    setActiveClass(contentItems, num)
    
    tabItems.forEach(checkoutTabs)
}

initTabs(2)

