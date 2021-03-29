const panels = document.querySelectorAll('.panel')
const buttons = document.querySelectorAll('.accordion')
const userEvents = ['click', 'touchend']

const execute = {
    executeEvents(puserEvents, items, callback) {
        puserEvents.forEach(userEvent => {
            items.forEach((item, index) => {
                item.addEventListener(userEvent, (e) => {
                    e.preventDefault()
                    callback(index)
                })
            })
        })
    }
}
execute['executeEvents'](userEvents, buttons, initAccordion)

function initAccordion(index) {
    buttons.forEach(button => {
        button.classList.remove('active')
    })
    buttons[index].classList.add('active')
    if (panels[index].style.maxHeight == '') {
        panels.forEach(panel => {
            panel.style.maxHeight = null
        })
        panels[index].style.maxHeight = panels[index].scrollHeight + 'px'
    } else {
        panels[index].style.maxHeight = null
        buttons[index].classList.remove('active')
    }

}