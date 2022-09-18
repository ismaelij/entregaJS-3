const arrayObjs = [
    {
        id: 1,
        nombre: 'Fugazzeta',
        ingredientes: ['Cebolla', 'Muzarella', 'Salsa'],
        precio: 1600
    },

    {
        id: 2,
        nombre: 'Especial',
        ingredientes: ['Morron', 'Jamon', 'Muzarella', 'Salsa'],
        precio: 500
    },

    {
        id: 3,
        nombre: 'Napolitana',
        ingredientes: ['Tomate', 'Ajo', 'Albahaca', 'Muzarella', 'Salsa'],
        precio: 700
    },

    {
        id: 4,
        nombre: 'Tropical',
        ingredientes: ['Anana', 'Ciruela', 'Muzarella', 'Salsa'],
        precio: 1000
    },

    {
        id: 5,
        nombre: 'Del Bosque',
        ingredientes: ['Champiñones', 'Muzarella', 'Salsa'],
        precio: 1500
    },

    {
        id: 6,
        nombre: 'Caprese',
        ingredientes: ['Tomate', 'Albahaca', 'Salsa'],
        precio: 1300
    }
]


function pizzasFun(array){
    
    // Se imprime en consola las pizzas con id impar
    array.map(pizza => {
        if(pizza.id % 2 != 0){
            console.log(pizza)
        }
    });

    console.log("")
    console.log("PIZZAS ECONÓMICAS: ")

    // Se imprime las pizzas con un valor menor a 600
    array.map(pizza => {
        if(pizza.precio < 600){
            console.log(`La ${pizza.nombre} tiene un valor de $${pizza.precio} `)
        }
    })
    
    console.log("")
    console.log('TODAS LAS PIZZAS: ')

    // Se imprime los nombres de todas las pizzas
    
    /* for(let i = 0; i < array.length; i++){
        console.log(array[i].nombre, '$' + array[i].precio);
    } */

    array.forEach(pizza => {
        console.log(pizza.nombre, '$' + pizza.precio);
    });

};

/* pizzasFun(arrayObjs); */

//-----------------------------------------------------//

const div = document.querySelector('#div_html')
const h2 = document.querySelector('#h2_html')
const h4 = document.querySelector('#h4_html')
const input = document.querySelector('#input_html')
const button = document.querySelector('#button_html')
const addForm = document.querySelector('#form_html')
const lista_pizzas = document.querySelector('#Lista_de_pizzas')




const createTask = (task) => {
   return `<li><img src="./tareaNucba2.0/imgs/pizza${task.id}.jpg" class="img_pizza">${task.name}</li>`
}

const renderTask = (array) => {
    lista_pizzas.innerHTML =  array.map(task => createTask(task)).join('')
}

function buscarPizza(id, array) {
    return array.find((elemento) => elemento.id == id)
}


let lista = []

const addFunction = (evento) => {
    
    evento.preventDefault();

    let inputId = input.value.trim()
    
    lista = [...lista, {name:arrayObjs.find(pizza => pizza.id == inputId).nombre, id: arrayObjs.find(pizza => pizza.id == inputId).id - 1}]
    console.log(lista)

    input.value = '';
    renderTask(lista)
}

const init = () => {
    addForm.addEventListener('submit', addFunction)
}

init()




