


////priority filtro


const selectPrioridad = document.querySelector('#select1')

selectPrioridad.addEventListener('change', getPriority);

//priotidad

function getPriority(event) {
    let prioridad = event.target.value;
    if (prioridad != "") {
        let lista = filterPrioridad(prioridad, tareas);
        printTask(lista);
    } else {
        printTask(tareas)
    }
}


function filterPrioridad(pImportante, pListaTareas) {



    const filterList = pListaTareas.filter(tarea => tarea.prioridad == pImportante);

    return filterList;


}


//palabra
let texto = document.querySelector('#inputTarea')

texto.addEventListener('keydown', getInputData);

function getInputData(event) {
    if (event.keyCode == 13) {

        let buscadorTarea = texto.value;
        let palabraEcontrada = buscadorPorPalabra(buscadorTarea, tareas);
        printTask(palabraEcontrada);
    }
}

function buscadorPorPalabra(pPalabra, pTaskList) {
    const listaFiltrada = pTaskList.filter(task => task.titulo.toLowerCase().includes(pPalabra.toLowerCase()))

    return listaFiltrada
}




















