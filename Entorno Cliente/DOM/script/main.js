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

numeros.forEach(num =>{
    num.onclick = () =>{
        operacion += num.textContent;
        output.value += num.textContent;        
    }
});

clear.onclick = () =>{
    operacion = "";
    output.value = operacion;
}

sum.onclick = () =>{
    operacion += "+";
    output.value += "+";
}

menos.onclick = () =>{
    operacion += "-";
    output.value += "-";
}

div.onclick = () =>{
    operacion += "/";
    output.value += "/";
}

mult.onclick = () =>{
    operacion += "*";
    output.value += "x";
}

igual.onclick = () =>{
    if (operacion != ""){        
        output.value = eval(operacion);
        operacion = output.value;
    }
    
}





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
    ej3.style.display = "flex";
}

function ejercicio5(){
    mostrarEjercicio();
    ej5.style.display = "flex";
}

function ejercicio6(){
    mostrarEjercicio();
    ej3.classList.remove('inActivo');
}


