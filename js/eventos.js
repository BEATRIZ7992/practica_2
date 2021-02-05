let sectionTask = document.querySelector('section .flex')



// acciones al arrancar la pagina
const printTask = function (pTaskList) {

    sectionTask.innerHTML = ""
    pTaskList.forEach(tarea => {

        printOneTask(tarea)
    });
}

const printOneTask = function (pListTask) {

    let div = document.createElement('div')
    let article = document.createElement('article');
    let h1 = document.createElement('h1');
    let button = document.createElement('button')




    let contenth1 = document.createTextNode(pListTask.titulo);//


    div.classList.add(pListTask.prioridad)


    h1.appendChild(contenth1);


    button.innerText = 'Eliminar'
    button.dataset.id = pListTask.id;
    button.addEventListener('click', deleteTask);




    article.appendChild(h1);
    article.appendChild(button);


    sectionTask.appendChild(article);


}
printTask(tareas)



//borrar

function deleteTask(event) {

    let id = parseInt(event.target.dataset.id);
    let article = event.target.parentNode;

    article.parentNode.removeChild(article);

    let position = tareas.findIndex(tarea => tarea.id === id);

    tareas.splice(position, 1);
    console.log(tareas);


}



const inputTitulo = document.querySelector('#titulo');
const inputPrioridad = document.querySelector('#prioridad');
const btnForm = document.querySelector('#guardar');
let idTarea = tareas.length;

btnForm.addEventListener('click', getDataForm)




function getDataForm(event) {
    event.preventDefault();
    const tituloTarea = inputTitulo.value;
    const prioridadTarea = inputPrioridad.value;




    if (tituloTarea != "" && prioridadTarea != "") {
        const newTarea = {
            id: ++idTarea,
            titulo: tituloTarea,
            prioridad: prioridadTarea,
        }
        saveTask(newTarea);
    } else {

    }
    function saveTask(pTask) {
        tareas.push(pTask);
        printOneTask(pTask);
        console.log(tareas)
    }
}

