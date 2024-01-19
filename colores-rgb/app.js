// Se selecciona el elemento 'input' de cada color.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');
// Se selecciona el elemento 'p' de cada color.
const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');
// Se crean las variables que tendran los valores de los colore, con sus valores iniciales.
let rojo = inputRojo.value;
let verde=  inputVerde.value;
let azul = inputAzul.value;
//Se genera el texto para reemplazarlo y mostrarcelos al usuario en cada parrafo.
textoRojo.innerText=rojo;
textoVerde.innerText=verde;
textoAzul.innerText=azul;

//
function actualizarColor(rojo,verde,azul){
    const colorRGB = `rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//Definir como actulaizar el color RED(Rojo)

inputRojo.addEventListener('change',()=>{
    rojo = inputRojo.value;
    textoRojo.innerText=rojo;
    actualizarColor(rojo,verde,azul);
});

//Definir como actuaizar el color GREEN(Verde)

inputVerde.addEventListener('change',()=>{
    verde = inputVerde.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo,verde,azul);
})

//Definir como actuaizar el color BLUE(Azul)

inputAzul.addEventListener('change',() => {
    azul = inputAzul.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo,verde,azul);
})

