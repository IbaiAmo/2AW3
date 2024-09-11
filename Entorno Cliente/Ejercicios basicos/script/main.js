//Elelmentos del DOM
const $panelEjercicio = document.getElementById('mostrarEjercicio');
const $dropdown = document.getElementById('dropdown');
const $flecha = document.getElementById('flecha');
const $botones = document.querySelector('.botones');
const $body = document.querySelector('body');
const $template = document.getElementById("template");

function ejercicio1(){
    $panelEjercicio.innerHTML = "";
    let nombre = prompt("Introduce tu nombre");
    let ap1 = prompt("Introduce tu primer apellido");
    let ap2 = prompt("Introduce tu segundo apellido");


    if (nombre == null && ap1 == null && ap2 == null){
        panelEjercicio.innerHTML = "No sé quién eres porque no has escrito nada";
    }else{
    $panelEjercicio.innerHTML = 
    `<h3>¿Quién eres tú?</h3>
    <p>Nombre: ${nombre}</p>
    <p>Primer apellido: ${ap1}</p>
    <p>Segundo apellido: ${ap2}</p>
    <strong>${nombre + " " + ap1 + " " + ap2}</strong>`;
    }
}

function ejercicio2(){
    $panelEjercicio.innerHTML = "";
    let numeros = "";
    let contarFilas = 0;

    for(let i = 1; i <= 100; i++){
        if (i % 2 == 0){
            numeros += i + ",";
            contarFilas++;
        }
        
        if (contarFilas % 5 == 0){
            numeros += "<br>";
        }  
    }

    $panelEjercicio.innerHTML = 
    `<h3>Números pares entre 1 y 100</h3>
    <p>${numeros}</p>`;
}

function ejercicio3(){
    $panelEjercicio.innerHTML = "";
    let numeros = "";
    let contarFilas = 0;
    let i = 1;

    while(i <=100){
        if (i % 2 == 0){
            numeros += i + ",";
            contarFilas++;
        }
        
        if (contarFilas % 5 == 0){
            numeros += "<br>";
        }  

        i++;
    }

    $panelEjercicio.innerHTML = 
    `<h3>Números pares entre 1 y 100</h3>
    <p>${numeros}</p>`;
}

function ejercicio4(){
    $panelEjercicio.innerHTML = "";
    let numeros = "1, ";
    let contarFilas = 0;
    let numInicio = 1;
    let suma;
    
    for(let i = 2; i <= 100; i++){
        suma = numInicio + i;
        numInicio = suma;
        contarFilas++;

        if (contarFilas % 10 == 0){
            numeros += "<br>";
        }
        numeros += suma + ", "; 
    }

    $panelEjercicio.innerHTML = 
    `<h3>Sumatorios</h3>
    <p>${numeros}</p>`;
}

function ejercicio5(){
    $panelEjercicio.innerHTML = "";
    let numeros = "1, ";
    let contarFilas = 0;
    let numInicio = 1;
    let suma,cont = 2;

    while(cont <= 100){
        suma = numInicio + cont;
        numInicio = suma;
        contarFilas++;
        if (contarFilas % 10 == 0){
            numeros += "<br>";
        }
        numeros += suma + ", ";
        cont++;
    }

    $panelEjercicio.innerHTML = 
    `<h3>Sumatorios</h3>
    <p>${numeros}</p>`;
}

function ejercicio6(){
    $panelEjercicio.innerHTML = "";
    let numeros = "";
    let i = 2;
    let confirmado = false;
    intervalNums();

    function intervalNums(){
        let interval = setInterval(()=> {
    
            if (i % 2 == 0){
                numeros += i + ", ";
            }
            
            if(i % 25 == 0){
                clearInterval(interval);
    
                const clone = $template.content.cloneNode(true);
                const fondo = clone.querySelector("#fondo");
                const btnNo = clone.getElementById("btnNo");
                const btnSi = clone.getElementById("btnSi");
    
                $body.appendChild(fondo);
    
                btnNo.onclick = () =>{
                    $body.removeChild(fondo);
                }
                btnSi.onclick = () =>{
                    $body.removeChild(fondo);
                    intervalNums();
                }
            }
            i++;
            $panelEjercicio.innerHTML = 
            `<h3>Numeros pares</h3>
            <p>${numeros}</p>
            `;
        }, 200);    
    }
}

function ejercicio7(){
    $panelEjercicio.innerHTML = "";
}

function ejercicio8(){
    $panelEjercicio.innerHTML = "";
}

let i = 0;
$dropdown.addEventListener('click', ()=>{
    if (i % 2 == 0){
        $botones.classList.add('show');
    }else{
        $botones.classList.remove('show');
    }
    i++;
});



