const body = document.querySelector('body');
const main = document.querySelector('main');
const ejercicios = document.querySelectorAll('.ejercicios');

ejercicios.forEach(ejercicio =>{
    ejercicio.style.display = "none";
});

//Menu para seleccionar los ejercicios
const menu = document.querySelector('aside');
const cerrar = document.querySelector('aside > i');
const infoM = document.getElementById('infoMob');
const infoG = document.getElementById('infoGen');

if (window.outerWidth < 600){
    let xStart = 0;
    let xEnd = 0;

    //código para abrir y cerrar el menu
    body.addEventListener('touchstart', (e) =>{
        xStart = e.touches[0].clientX;
    });

    body.addEventListener('touchend', (e) =>{
        xEnd = e.changedTouches[0].clientX;
        const diff = xStart - xEnd;        

        if(xStart < xEnd && diff * -1 > 80){
            menu.classList.remove('showMenu');
        }else if(xStart > xEnd && diff > 80){
            menu.classList.add('showMenu');
        }
    });

    cerrar.addEventListener('click', () =>{
        menu.classList.remove('showMenu');
    });
}


//Ejercicio 3
const template = document.getElementById('template');
const inputMensaje = document.getElementById('mensajeInput');
const btnEnviar = document.getElementById('enviar');
const panelMensajes = document.getElementById('mensajes');
const inputFoto = document.getElementById('foto');
const ej3 = document.getElementById('e3');

btnEnviar.addEventListener('click', () =>{
    if (!inputMensaje.value.trim() == ""){
        const clon = template.content.cloneNode(true);
        const mensaje = clon.querySelector('.mensaje');
        const texto = clon.querySelector('.mensaje > p');
        texto.textContent = inputMensaje.value;        

        panelMensajes.appendChild(mensaje);
        inputMensaje.value = "";
        panelMensajes.scrollTop = panelMensajes.scrollHeight;
    }
});

inputFoto.onchange = () =>{
    for (let i = 0; i < inputFoto.files.length; i++){
        const url = URL.createObjectURL(inputFoto.files[i]);
        const image = document.createElement('img');
        image.src = url;
        panelMensajes.appendChild(image);
        panelMensajes.scrollTop = panelMensajes.scrollHeight;
    }
}

//ejercicio 4
const ej4 = document.getElementById('e4');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const copiarBtn = document.querySelector('#e4 > button');

copiarBtn.onclick = () =>{
    text2.value = text1.value;
    text1.value = "";
}


//Ejercicio 5
const ej5 = document.getElementById('e5');
const output = document.getElementById('calcOut');
const clear = document.getElementById('clear');
const sum = document.getElementById('sum');
const menos = document.getElementById('menos');
const mult = document.getElementById('mult');
const div = document.getElementById('div');
const igual = document.getElementById('igual');
const numeros = document.querySelectorAll('.btns');


let operacion = "";
let operador = false;

numeros.forEach(num =>{
    num.onclick = () =>{
        operador = false;
        operacion += num.textContent;
        output.value += num.textContent;              
    }
});

clear.onclick = () =>{
    operacion = "";
    output.value = operacion;
}

sum.onclick = () =>{
    if(!operador){
        operacion += "+";
        output.value += "+";
    }
    operador = true;
}

menos.onclick = () =>{
    if(!operador){
        operacion += "-";
        output.value += "-";
    }
    operador = true;
}

div.onclick = () =>{
    if(!operador){
        operacion += "/";
        output.value += "/";
    }
    operador = true;
}

mult.onclick = () =>{
    if(!operador){
        operacion += "*";
        output.value += "x";
    }
    operador = true;
}

igual.onclick = () =>{
    if (operacion != ""){        
        output.value = eval(operacion);
        operacion = output.value;
    }
    
}

//Ejercicio 6
const ej6 = document.getElementById('e6');
const fecha = document.getElementById('fecha');
const hora = document.getElementById('hora');

setInterval(() =>{
    let date = new Date();
    fecha.innerHTML = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    hora.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
     
}, 1000);



//funcion para quitar todo lo de la pantalla para luego mostrar el ejercicio.
function mostrarEjercicio(){
    infoM.style.display = "none";
    infoG.style.display = "none";
    menu.classList.remove('showMenu');
    ejercicios.forEach(ejercicio =>{
        ejercicio.style.display = "none";
    });
}

function ejercicio3(){
    mostrarEjercicio();
    ej3.style.display = "flex";
}

function ejercicio4(){
    mostrarEjercicio();
    ej4.style.display = "flex";
}

function ejercicio5(){
    mostrarEjercicio();
    ej5.style.display = "flex";
}

function ejercicio6(){
    mostrarEjercicio();
    ej6.style.display = "flex";
}


