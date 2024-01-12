/*Seleccionar Elementos del DOM*/

// const contenedor = document.getElementById('contenedor');
// console.log(typeof contenedor.innerHTML);

/*const titulo = document.getElementById('titulo');
console.log(titulo);*/

/*const toppings = document.getElementsByClassName('topping');
console.log(toppings[1]);*/

/*const mistoppings = document.getElementsByTagName('li');
console.log(mistoppings);

const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');
console.log(toppingsFondoMarron);*/

/*const aceituna = document.querySelector('.topping#aceitunas');
console.log(typeof aceituna);*/

// const primerToppingNaranja = document.querySelector('.topping.fondo-naranja'/* 'ul li.fondo-naranja'*/);
// console.log(typeof primerToppingNaranja);

/*const toppingsNoFondoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(toppingsNoFondoMarron);*/

/*const primerToppingNaranja2 = document.querySelectorAll('ul li.fondo-naranja');
console.log(primerToppingNaranja2[0]);
console.log(primerToppingNaranja2[1]);
console.log(primerToppingNaranja2.length);
console.log(primerToppingNaranja2);*/


//------------

/*Cambiar estilos de toppings*/

/*const  primerTopping = document.querySelector('.topping');

primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color ='#6dff00';
primerTopping.style.textTransform = 'uppercase';*/

/*-------------------------------------------------------------*/

/*Texto en el Dom*/
/*Tres formas de obtener el texto de un elemento*/

/*const listaToppings = document.getElementById('listado-toppings');

console.log(listaToppings.innerText);//text interno,retorna una cadena de caracteres sin identacion.

console.log(listaToppings.textContent);//text content, retorna una cadena de caracteres con identacion.

console.log(listaToppings.innerHTML);//retorna una cadena de caracteres con la etiqueta HTML.*/

/*-------------------------------------------------------------*/
/*Forma de cambiar un texto */

/*const titulo = document.getElementById('titulo');
console.log(titulo.innerText);
titulo.innerText ='Mis Toppings Favoritos';*/

/*-------------------------------------------------------------*/

/*Atributos*/

/*const enlace = document.getElementsByTagName('a');

console.log(enlace[0].getAttribute('href'));//obtener el atributo href

console.log(enlace[0].removeAttribute('href'));//remover el atributo href

console.log(enlace[0].setAttribute('href', 'https://es.search.yahoo.com/search?fr=mcafee&type=E210ES91215G0&p=dff'));//cambiar el atributo href.*/


/*-------------------------------------------------------------*/
/*Clases*/
/*Agregar y modificar clases*/

/*const primerTopping = document.querySelector('.topping');

primerTopping.classList.add('texto-verde');//agrega una nueva clase de forma dinamica y podemos agragar codigo css a la clase.

console.log(primerTopping.classList);//muesta un arreglo con las clases de un elemento,en este caso del primer topping qu encuentra en el dom,del elemento listado-toppings.*/

/*Verificar si una clase existe*/

/*console.log(primerTopping.classList.contains('fondo-marron'));//verifica si la clase 'fondo-marron' existe en el elemento 'primerTopping.contains*/

/*Eliminar una clase*/

/*console.log(primerTopping.classList.remove('topping'));//remueve la clase 'topping' del elemento 'primerTopping

console.log(primerTopping.classList);*/

/*-------------------------------------------------------------*/

/*Crear elementos desde cero de forma dinamica y agregarlo al DOM*/

/*const listaDeToppings = document.getElementById('listado-toppings');//selecciona el elemento 'listado-toppings'.

const toppingNuevo = document.createElement('li');//crea un elemento 'li'.

toppingNuevo.classList.add('topping', 'fondo-marron');//agrega la clase 'topping' y 'fondo-marron' al elemento 'toppingNuevo'.

toppingNuevo.innerText = 'Queso Extra';//agrega el texto 'Queso Extra' al elemento 'toppingNuevo'.

listaDeToppings.append(toppingNuevo);//agrega el elemento(nodo) 'toppingNuevo' al elemento 'listado-toppings'.

listaDeToppings.appendChild(toppingNuevo);//agrega el elemento(nodo) 'toppingNuevo' al elemento 'listado-toppings',es igual que el metodo 'append'.*/

/*Removiendo elementos*/

/*toppingNuevo.remove();//remueve el elemento 'toppingNuevo' del elemento 'listado-toppings'.

listaDeToppings.remove()//remueve el elemento 'listado-toppings' del dom.*/

/*-------------------------------------------------------------*/

/*Recorrer el DOM*/

/*const listaDeTopping = document.getElementById('listado-toppings');

console.log(listaDeTopping);


console.log(listaDeTopping.parentElement)//devuelve el elemento padre del elemento 'listado-toppings',este solo incluye los elementos html.

console.log(listaDeTopping.parentNode)//devuelve el elemento padre del elemento 'listado-toppings',este incluye texto y comentarios al ser el nodo mas amplio.

console.log(listaDeTopping.parentElement.parentElement);//devuelve el elemento padre del elemento 'listado-toppings',este solo incluye los elementos html.

console.log(listaDeTopping.children);//devuelve un arreglo con todos los elementos 'li' del elemento 'listado-toppings'.

console.log(listaDeTopping.firstElementChild);//devuelve el primer elemento 'li' del elemento 'listado-toppings' entre fisrstElmentChild y fisrtChild, es mas practica para nossotros.

console.log(listaDeTopping.firstChild);//devuelve el primer nodo del elemento 'listado-toppings' pero al incluir espacios en este caso por identacion devuelve el texto.

console.log(listaDeTopping.children[0]);//devuelve el primer elemento 'li' del elemento 'listado-toppings',esta propiedad si retornaria elementos html.

console.log(listaDeTopping.lastChild);//devuelve el ultimo nodo del elemento 'listado-toppings',pero en este caso tambin devuelve el texto al tener espacios de identacion,este utiliza nodos.

console.log(listaDeTopping.lastElementChild);//devuelve el ultimo elemento 'li' del elemento 'listado-toppings',esta propiedad si retornaria elementos html.

console.log(listaDeTopping.previousElementSibling);//devuelve el elemento 'li' anterior del elemento 'listado-toppings',este devuelve el hermano anterior.

console.log(listaDeTopping.nextElementSibling);//devuelve el elemento 'li' siguiente del elemento 'listado-toppings',este devuelve el hermano siguiente.

console.log(listaDeTopping.nextSibling);//devuelve el elemento 'li' siguiente del elemento 'listado-toppings',este devuelve el hermano siguiente o el texto,pues este trabajo es con nodos,es en este caso.


console.log(listaDeTopping.firstElementChild.firstElementChild);//devuelve el primer elemento 'li' del primer elemento 'li' del elemento 'listado-toppings',esto sirvepara encadenar, puedes ir mas abajo,mas arriba o mas profundo en la jerarquia o DOM.*/

/*-------------------------------------------------------------*/

/*Eventos del DOM*/
/*    Conceptos importantes
-Elemento target(Blanco del evento).
-Trigger--Desencadenar
-Event Handler--Manejador de eventos.
'Funcion en si que maneja el evento.'
-Event Listener--Escuchador de eventos.
' Se asocia un evento con una funcion.'
*/
//Eventos en HTML
/*function eventOnClick(topping){
    console.log('El topping '+topping+' fue agregado');
};//funcion anonima que se le pasa un parametro y entrga una cadena de caracteres por consola,este ejemplo es para usar onclick() en las etiquetas de HTML.
/* <li onclick="eventOnClick('Aceitunas')" class="topping fondo-marron" id="aceitunas">Aceitunas</li> */

//Evento .addEventListener()

// const albahaca = document.getElementById('albahaca');

/*function eventOnClick(e){
    console.log(e.target);
}//el primer parametro es el evento y el segundo es el manejador de eventos.,este e.target muestra el elemento target del evento.*/

/*function eventOnClick(e){    
    console.log(e.target.innerText);//muestra el texto del elemento target usando el doble punto,p
}*/

/*albahaca.addEventListener('click',eventOnClick);//el primer parametro es el evento y el segundo es el manejador de eventos.{*/

/*Todos los eventos en el DOM se representan como un objeto pues estos tinen propiedades y metodos*/
//________________________________
const toppings = document.getElementsByClassName('topping');//selecciona todos los elementos con la clase 'topping'.

//console.log(toppings);


function eventOnClick(e){
    console.log(e.target.innerText);
}//el primer parametro es el evento y el segundo es el manejador de eventos.,este e.target muestra el texto del elemento target del evento.

/*for(const topping of toppings){
   topping.addEventListener('click',eventOnClick);
}//Este ciclo recorre todos los elementos con la clase 'topping' y agrega un manejador de eventos 'eventOnClick' a cada elemento.*/
    
for(const topping of toppings){
    topping.addEventListener('click',(e)=>{
        console.log(e.target.innerText);
    });
};//Este ciclo recorre todos los elementos con la clase 'topping' y agrega un manejador de eventos 'eventOnClick' a cada elemento y muestra el texto del elemento target utilizando una funcion flecha.
































