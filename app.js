//Seleccionar los elementos del DOM

const boton = document.querySelector('#boton-color');
console.log(boton.innerHTML);

const color = document.getElementById('color');



function generarColorHexAleatorio() {
   let colorHexa = '#';//le asignamos un valor a la variable
   let digitos = '0123456789ABCDEF';//le asignamos un valor a la variable
   for (let i = 0; i < 6; i++) {
      let indiceAleatorio = Math.floor(Math.random() * digitos.length);//genera un indice aleatorio entre 0 y 15
      colorHexa += digitos[indiceAleatorio];//concatena el color
   }
   return colorHexa ;//retorna el color
   
}  

boton.addEventListener('click', function() {
   let colorAletorio = generarColorHexAleatorio();
   color.textContent = colorAletorio;
   document.body.style.backgroundColor = colorAletorio;
});


