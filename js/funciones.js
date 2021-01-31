

let botones = document.querySelector('.form-select')
let sectionListaTareas = document.querySelector('#ListaTareas')


const printBoton = function (pBtn) {
    for (let boton of pBtn) {
        botones.innerHTML += `    
        
        <option value="1">${boton.prioridad}</option>
        
   `
    }
}
printBoton(tareas)



const printTask = function (pListTask) {
    for (let task of pListTask) {
        sectionListaTareas.innerHTML += `
    
                <ul>
                    <li>${task.titulo}:${task.prioridad}</li>
                    
                </ul>`

    }

}
printTask(tareas)

//pintar solo los urgentes

function filterByTitulo(pTitulo, pTaskList) {
    const filterlist = pTaskList.filter(task => task.titulo == pTitulo)

    return filterlist

}