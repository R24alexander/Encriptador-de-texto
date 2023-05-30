let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let botoncopiar = document.querySelector(".btn-copiar");
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
// let copia = document.querySelector(".contendor-copia");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

botonEncriptar.addEventListener('click', btnEncriptar);
botonDesencriptar.addEventListener('click', btnDesencriptar);
botoncopiar.addEventListener('click', btncopiar);

function btnEncriptar() {
    if (textArea.value != ""){
        const textEncriptado = encriptar(textArea.value);
        mensaje.textContent = textEncriptado;
        console.log("click");
        textArea.value = "";
        botoncopiar.style.opacity = "1";

        // munieco.style.backgroundImage = "none";
        ocultar();
        // copia.classList.add("opacidad");
    }
    
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            
        }
    }
    return stringEncriptada;
}

// console.table(matrizCodigo);

function btnDesencriptar() {
    if (textArea.value != "") {
        const textEncriptado = desencriptar(textArea.value);
        mensaje.textContent = textEncriptado;
        // console.log("click");
        textArea.value = "";
        // mensaje.style.backgroundImage = "none";
        botoncopiar.style.opacity = "1";
        ocultar();
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            
        }
    }
    return stringDesencriptada;
}
 
function btncopiar() {
    textArea.value = mensaje.textContent;
    mensaje.textContent = "";
    botoncopiar.style.opacity = "0";
    mostrar();
}


function ocultar() {
    let munieco = document.querySelector(".contedor-munieco");
    let parrafo = document.querySelector(".contenedor-parrafo");

    munieco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    
}

function mostrar() {
    let munieco = document.querySelector(".contedor-munieco");
    let parrafo = document.querySelector(".contenedor-parrafo");

    munieco.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
}

// function CopiarTenxto() {
//     textArea.value = mensaje.textContent;

// }


// let botonEncriptar = document.querySelector(".btn-encriptar");
// let botonDesencriptar = document.querySelector(".btn-desencriptar");
// let munieco = document.querySelector(".munieco");
// let ContenedorParrafo = document.querySelector(".contenedor-parrafo");
// let resultado = document.querySelector(".texto-resultado");