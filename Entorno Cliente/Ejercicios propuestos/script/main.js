//Elelmentos del DOM
const $panelEjercicio = document.getElementById('mostrarEjercicio');
const $dropdown = document.getElementById('dropdown');
const $flecha = document.getElementById('flecha');
const $botones = document.querySelector('.botones');
const $body = document.querySelector('body');
const $template = document.getElementById("template");


function ejercicio1(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej1 = clone.getElementById('ejercicio1');
    const input = clone.querySelector('#ejercicio1 > div > input');
    const boton = clone.querySelector('#ejercicio1 > div > button');
    let texto = clone.querySelector('#ejercicio1 > p');

    boton.addEventListener('click', ()=>{
        if(input.value != ""){
            texto.textContent = "Tiene " + input.value.length + " caracteres";
        }
    });

    $panelEjercicio.appendChild(ej1);
}

function ejercicio2(){
    $panelEjercicio.innerHTML = "";
    const anchura = window.outerWidth;
    const altura = window.outerHeight;
    const diagonal = Math.sqrt(anchura**2 + altura**2);
    $panelEjercicio.innerHTML = `
    <p>Anchura de la pantalla: ${anchura}px</p>
    <p>Altura de la pantalla: ${altura}px</p>
    <p>Diagonal de la pantalla: ${Math.floor(diagonal)}px</p>
    `;    
}

function ejercicio3(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej3 = clone.getElementById('ejercicio3');
    const botones = clone.querySelectorAll('#ejercicio3 > button');
    
    botones.forEach(boton => {
        boton.addEventListener('mousedown', () =>{
            $body.id = boton.id;
        });

        boton.addEventListener('mouseup', () =>{
            $body.removeAttribute("id");
        });

        //para móvil
        boton.addEventListener('touchstart', () =>{
            $body.id = boton.id;
        });

        boton.addEventListener('touchend', () =>{
            $body.removeAttribute("id");
        });
    });

    $panelEjercicio.appendChild(ej3);
}

function ejercicio4(){
    $panelEjercicio.innerHTML = `
        <h3>Objeto screen</h3>
        <p>La resolución de la pantalla es ${screen.width + "x" + screen.height}</p><br>
        <h3>Objeto navigator</h3>
        <p>El nombre del navegador que usas es: ${navigator.appName}</p>
        <p>Usas el siguiente sistema operativo: ${navigator.platform}</p>
        <p>La versión del navegador que usas es: ${navigator.appVersion}</p>
        <h3>Objeto document</h3>
        <p>La URL del documento es: <a href="${document.URL}">URL</a></p>
        <h3>Objeto location</h3>
        <p>El protocolo usado para acceder a esta página ha sido: ${location.protocol}</p>`;
    let ventana = window.open("https://www.google.com", "_blank", "toolbar=yes,scrollbars=no,resizable=0,top=50,left=150,width=600,height=400");
}

function ejercicio5(){
    $panelEjercicio.innerHTML = "";
    
}

function ejercicio6(){
    $panelEjercicio.innerHTML = "";
    
}

function ejercicio7(){
    $panelEjercicio.innerHTML = "";
    
}

function ejercicio8(){
    $panelEjercicio.innerHTML = "";
}

function ejercicio9(){
    $panelEjercicio.innerHTML = "";
}

function ejercicio10(){
    $panelEjercicio.innerHTML = "";
}

//Evento de click para que aparezcan los botones de los ejercicios.
let i = 0;
$dropdown.addEventListener('click', (e)=>{
    if (i % 2 == 0){
        $botones.classList.add('show');
        $flecha.classList.replace("ri-arrow-right-s-fill", "ri-arrow-down-s-fill");
    }else{
        $botones.classList.remove('show');
        $flecha.classList.replace("ri-arrow-down-s-fill", "ri-arrow-right-s-fill");
    }
    i++;
});





