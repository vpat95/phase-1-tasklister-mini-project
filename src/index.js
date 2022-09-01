document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('form')

  // calls function addTask to append <p>'s into <div = "list"> on submit event

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const task = e.target.querySelector('#new-task-description').value
    const priority = e.target.querySelector('#priority').value
    addTask(task, priority)

    form.reset()
  })

//on click event of <button id="sort"> order of priority is reversed

  const sort = document.querySelector('#sortPriority')
  sort.addEventListener('click', (e) => {
    let parent = e.target.nextSibling.nextSibling
    let divs = parent.children
    let i = divs.length - 1;

    for (; i--;) {
      parent.appendChild(divs[i])
    }
  })
});

// Takes input of task(string) and priority(string) from form and creates a <p> element with the text
// submitted via the form, creates a <button> as child element, appends the <p> element to the 
// appropriate <div> based on priority selected on form, and changes color of text to match priority

function addTask(task, priority) {
  const p = document.createElement('p')
  const btn = document.createElement('button')
  btn.addEventListener('click', removeTask)

  p.textContent = `${task} `
  btn.textContent = 'x'

  p.appendChild(btn)

  if (priority === 'High') {
    p.style.color = "red"
    document.querySelector('#high').appendChild(p)
  } else if (priority === 'Medium') {
    p.style.color = "yellow"
    document.querySelector('#medium').appendChild(p)
  } else {
    p.style.color = "green"
    document.querySelector('#low').appendChild(p)
  }
}

//removes parent <p> element of button clicked
function removeTask(e) {
  e.target.parentNode.remove()
}

