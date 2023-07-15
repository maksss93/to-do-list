const input = document.querySelector('.js-input');
const toDoList = document.querySelector('.js-list');
const btn = document.querySelector('.js-btn')

const addToDoItem = () => {
    btn.addEventListener('click', () => {
        if(input.value === '') return

        const newTask = document.createElement('div');

        newTask.classList.add('note__item')
        newTask.innerText = input.value

        toDoList.append(newTask)

        input.value = ''
    })
}

export default addToDoItem
