const openBurger = document.querySelector('.burger')
const closeBurger = document.querySelector('.menu__close')
const menu = document.querySelector('.menu')
const shadowWindow = document.querySelector('.menu-shadow')

openBurger.addEventListener('click', () => {
    menu.classList.add('menu--active')
})

closeBurger.addEventListener('click', () => {
    menu.classList.remove('menu--active')
})

shadowWindow.addEventListener('click', () => {
    menu.classList.remove('menu--active')
})

document.querySelectorAll('.my-data__input').forEach(input => {
    input.addEventListener('blur', () => {
        let amountValue = 0
        const fieldSet = document.querySelectorAll('.my-data__wrap')
        const legend = document.querySelectorAll('.my-data__title')

        if(input.value.trim() === '' || input.value.trim().length < 6){
            result = false
            fieldSet.forEach(item => item.classList.add('my-data__wrap--invalid'))
            legend.forEach(item => item.classList.add('my-data__title--invalid'))
            document.querySelector('.form__button').setAttribute('disabled', true)
        }else{
            fieldSet.forEach(item => item.classList.remove('my-data__wrap--invalid'))
            legend.forEach(item => item.classList.remove('my-data__title--invalid'))
            document.querySelector('.form__button').removeAttribute('disabled', false)
            result = true
            amountValue += 1
        }

    })
})


function validationForm(form){
    let result = true
    let amountValue = 0
    const fieldSet = document.querySelectorAll('.my-data__wrap')
    const legend = document.querySelectorAll('.my-data__title')

    form.querySelectorAll('.my-data__input').forEach(input => {
        if(input.value.trim() === '' || input.value.trim().length < 6){
            result = false
            fieldSet.forEach(item => item.classList.add('my-data__wrap--invalid'))
            legend.forEach(item => item.classList.add('my-data__title--invalid'))
            document.querySelector('.form__button').setAttribute('disabled', true)
        }else{
            fieldSet.forEach(item => item.classList.remove('my-data__wrap--invalid'))
            legend.forEach(item => item.classList.remove('my-data__title--invalid'))
            document.querySelector('.form__button').setAttribute('disabled', false)
            result = true
            amountValue += 1
        }

    })

    if(amountValue === 2){
        form.querySelectorAll('.my-data__input').forEach(input => {
            input.value = ''
        })
        return result
    }
}

document.querySelector('.form__button').addEventListener('click', function(e){
    e.preventDefault()

    if(validationForm(document) === true){
        alert('Данные отправлены')
    }
})