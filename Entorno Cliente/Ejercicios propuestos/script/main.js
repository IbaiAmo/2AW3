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
    <p>Anchura de la pantalla: ${anchura}</p>
    <p>Altura de la pantalla: ${altura}</p>
    <p>Diagonal de la pantalla: ${Math.floor(diagonal)}</p>
    `;    
}

function ejercicio3(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej3 = clone.getElementById('ejercicio3');

    $panelEjercicio.appendChild(ej3);
}

function ejercicio4(){
    $panelEjercicio.innerHTML = "";
    
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
$dropdown.addEventListener('click', ()=>{
    if (i % 2 == 0){
        $botones.classList.add('show');
        $flecha.classList.replace("ri-arrow-right-s-fill", "ri-arrow-down-s-fill");
    }else{
        $botones.classList.remove('show');
        $flecha.classList.replace("ri-arrow-down-s-fill", "ri-arrow-right-s-fill");
    }
    i++;
});



