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





























