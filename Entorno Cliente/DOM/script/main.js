//Menu para seleccionar los ejercicios
const menu = document.querySelector('aside');
const cerrar = document.querySelector('aside > i');
const body = document.querySelector('body');
const info = document.getElementById('info');

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
        console.log(diff);
        

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

function ejercicio3(){
    info.style.display = "none";
    menu.classList.remove('showMenu');
    ej3.classList.remove('inActivo');
}


//Ejercicio 4



