export {
    notesInputes,
    notesContentLists
}

let notesInputes = document.querySelector('.notes-inputes')
let notesContentLists = document.querySelector('.notes-content__lists')




// check for the keys from local storage
let todos = JSON.parse(localStorage.getItem('lists')) ?
    JSON.parse(localStorage.getItem('lists')) : []

if (todos.length) showTodos()

/// Todo lists to local storage

function setTodos() {
    localStorage.setItem('lists', JSON.stringify(todos))
}





// show todos data in the screen 
function showTodos() {
    const todos = JSON.parse(localStorage.getItem('lists'))

    notesContentLists.innerHTML = " " /// this method will clear before adding tasks

    todos.forEach((item, i) => {
        notesContentLists.innerHTML += `
        <li class="notes-content__list">
            <div class="notes-content__text">
                <div class="circle"></div> <div>${item.text}</div>
            </div>
            <div class="notes-content__data">
                ${item.time}, 00:00:00
            </div>
            <div class="notes-content__btns">
                <button onclick=(deleteTodo(${i})) class="notes-content__btn-delete">Delete</button>
                <button class="notes-content__btn-edit">Edit</button>
            </div>
        </li>
        
        `
    })
}



// show message                                               /// this method can show message when input is empty
function showMessage(where, message) {
    document.querySelector(`${where}`).textContent = message

    setTimeout(() => {
        document.querySelector(`${where}`).textContent = ''
    }, 2500)
}






/// get Todos data

notesInputes.addEventListener('submit', (e) => {
    e.preventDefault()
    ////
    const todoText = notesInputes['notes-inputes__text'].value.trim() /// got id from form  and trim can remove space 

    const todoDate = notesInputes['notes-inputes__date'].value
    const date = new Date(todoDate)
    const changeFormatDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`


    notesInputes.reset() //// this method in order to clear message after pushing

    if (todoText.length) {
        todos.push({
            text: todoText,
            time: changeFormatDate,
            completed: false
        })
        setTodos()
        showTodos()
    } else {
        showMessage('.notes-inputes__message', 'Please, enter some text...')
    }
})


///// delete toDo 




function deleteTodo(id) {
    const deletedTodos = todos.filter((item, i) => {
        return i !== id
    })

    todos = deletedTodos
    setTodos()
    showTodos()
}

