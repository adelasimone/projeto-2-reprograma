const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const input = document.querySelector('#todoInput').value
  const listaTarefa = document.querySelector('#todoLista')
  const excluirBtn = document.querySelector('#todoRemoverTodos')
  const marcarBtn = document.querySelector('#todoMarcarTodos')

  const tarefa = document.createElement('li')
  const paragrafo = document.createElement('p')
  const span = document.createElement('span')


  // tratando espaços e vazios no input
  if (input.trim() === "") {
    alert("Digite sua mensagem")
    return false
  }


  // incluindo/add o "x" para excluir
  paragrafo.innerText = input
  span.innerText = 'X'
  span.classList.add('btn-excluir')


  // add as tag criadas nas tag ja existentes
  listaTarefa.appendChild(tarefa)
  tarefa.appendChild(paragrafo)
  tarefa.appendChild(span)


  span.addEventListener('click', function () {
    listaTarefa.removeChild(tarefa)
  });

  paragrafo.addEventListener('click', function () {
    paragrafo.classList.toggle('checked')
  });

  marcarBtn.addEventListener('click', function () {
    listaTarefa.forEach(paragrafo.classList.toggle('checked'))
  });

  excluirBtn.addEventListener('click', function () {
    tarefa.remove(paragrafo)
  });


  // reseta a tarefa que foi add do input
  form.reset()
  

  //  drag and drop
  tarefa.setAttribute('draggable', true)
  listaTarefa.addEventListener('dragstart', function (e) {
    dragging = e.target.closest('li')
  })
  listaTarefa.addEventListener('dragover', function (e) {
    e.preventDefault()
    const node = e.target.closest('li')
    this.insertBefore(dragging, node)
  })
  listaTarefa.addEventListener('dragend', function (e) {
    dragging = null
  })
  
});
