const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListForm = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const taskContainer = document.querySelector('[data-tasks]')
const taskTemplate = docment.getElementById('[task-template]')
const newTaskForm = doocument.querySelector('[data-new-task-form]')
const newTaskInput = doocument.querySelector('[data-new-task-input]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_LIST_ID_KEY = 'task.selectedListID'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selecedListID = localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY )

listsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li'){
        selecedListID = e.target.dataset.listID
        saveAndRender()
    }
})

deleteListButton.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selecedListID)
    saveAndRender()
})

newListForm.addEventListener('submit', e =>{
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
})

newTaskForm.addEventListener('submit', e =>{
    e.preventDefault()
    const taskName = newTaskInput.value
    if (taskName === null || taskName === '') return
    const list = createList(taskName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
}) 

function createTask(name) {
    return {id = Date.now().toString(), name: name, tasks: []
   }


function createList(name) {
   return {id = Date.now().toString(), name: name, tasks: []
   
}

function saveAndRender(){
    save()
    render()
}

function save() {
localStorage.setItem(LOCAL_STORAGE_LIST_KEY, jSON.stringify(lists))
localStorage.setItem(LOCAL_STORAGE_LIST_ID_KEY, selecedListID)
}

function render(){
    clearElement(listsContainer)
    renderLists()

const selectedList = lists.find(list => list.id === selctedListID)
    if(selctedListID === null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selecedList.name
        renderTaskCount(selectedList)
        clearElement(taskContainer)
        renderTasks(selectedList)
    }
    
}

function renderTasks(selectedList){
    selectedList.tasks.forEach(task => {
const taskElement = document.importNode(takTemplate.content, true)
const checkbox = taskElement.querySelector('input')
checkbox.id = task.id 
checkbox.checked = task.complete
label.htmlFor = task.id
label.append(task.name)
taskContainer.appendChild(taskElement)
const label = taskElement.querySelector('label')
    })
}

function renderTaskCount(selectedList){
    const incompleteTaskCount = selectedList.tasks.filter(task => task.complete).length
    const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function renderLists() {
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listID = list.id
        listElement.classList.add("list-name")
        listElement.innerText = list.name
        if(list.id === selecedListID) listElement.classList.add('active-list')
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element){
while (element.firstChild) {
    element.removeChild(element.firstChild)
    }
}

render()
}
}