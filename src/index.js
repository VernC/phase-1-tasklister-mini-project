document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  const descriptionInput = document.querySelector('#insert')
  console.log(descriptionInput)
  const dateInput = document.createElement('input')
  console.log(dateInput)
  dateInput.type = "text"
  dateInput.name = "dueDate"
  dateInput.placeholder = "Enter Due Date"
  descriptionInput.appendChild(dateInput)

  form.addEventListener('submit', submitNewTask)
});

const submitNewTask = function(event) {
  event.preventDefault()
  // //this is how you would pull it if it was still in snake casing
  // const descriptionInput = document.querySelector('#new-task-description')
  // let input = descriptionInput.value
  // appendTask(input)
  // event.target.reset()
  // this would work if we change the input name to something that isn't written in snake casing. 'like description'
    let input = event.target.description.value
    let color = event.target.selectPriority.value
    let date = event.target.dueDate.value
    appendTask(input, color, date)
    event.target.description.value = ''
    event.target.dueDate.value = ''
    //use one of the two options below if you want the value box to appear empty again after you input something into it
    //event.target.description.value = ''
    //event.target.reset()
}

const appendTask = function(input, color, date) {
  
  //variable declaration, selectors, element creators
  const ul = document.querySelector('#list')
  const li = document.createElement('li')
  const deleteBtn = document.createElement('button')
  const editBtn = document.createElement('button')
  
  // assign values and attributes
  li.innerText = `${input} Due: ${date}`
  li.style.color = color
  deleteBtn.innerText = 'X'
  editBtn.innerText = 'EDIT'
  
  //appending
  li.append(deleteBtn, editBtn)
  ul.appendChild(li)

  //event listeners
  deleteBtn.addEventListener('click', () => li.remove())
  editBtn.addEventListener('click', () => editForm(li, input)) 
}

const editForm = function(li, input) {
  let form = document.createElement('form')
  let inputField = document.createElement('input')
  let submitBtn = document.createElement('button')

  inputField.type = 'text'
  inputField.name = 'editTask'
  inputField.palceholder = input
  
  submitBtn.type = 'submit'
  submitBtn.innerText = 'Change'

  form.append(inputField, submitBtn)
  li.append(form)

  form.addEventListener('submit', (e) => editTask(e,li))
}

const editTask = function(event, li){
  event.preventDefault()
  const deleteBtn = li.querySelector(':nth-child(1)')
  const editBtn = li.querySelector(':nth-child(2)')
  li.innerText = event.target.editTask.value
  li.append(deleteBtn, editBtn)
}
