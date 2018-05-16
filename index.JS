const form = document.querySelector('form#userForm')

function renderListItem(label, value) {
  const item = document.createElement('li')

  const term = document.createElement('dt')
  term.textContent = label

  const description = document.createElement('dd')

  try {
    description.appendChild(value)
  } catch(e) {
    description.textContent += value
  }

  item.appendChild(term)
  item.appendChild(description)
  return item
}

function renderList(data) {
  const list = document.createElement('ul')
  Object.keys(data).forEach(label => {
    const item = renderListItem(label, data[label])
    list.appendChild(item)
  })
  return list
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const user = {
    'Movie Type': form.MovieType.value,
    'Movie Name': form.MovieName.value,
    'Year':form.Year.value,
    'Movie Rating': form.MovieRating.value,
  }

  const list = renderList(user)
  const users = document.querySelector('#users')
  users.appendChild(list)

  form.reset()
  form.MovieType.focus()
}

form.addEventListener('submit', handleSubmit)

const clearAll = document.querySelector('#clearall')
clearAll.addEventListener('click', deleteAll)

function deleteAll(){
    document.querySelector('#users').remove()
}