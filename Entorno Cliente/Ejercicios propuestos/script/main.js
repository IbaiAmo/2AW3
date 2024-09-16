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
            console.log(input.value.split(""));
            
        }
    });

    $panelEjercicio.appendChild(ej1);
}

function ejercicio2(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
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
        }, 150);    
    }
}

function ejercicio7(){
    $panelEjercicio.innerHTML = "";
    let numeros = "";
    let numero = 0;
    let cont = 0;

    for(let i = 0; i <= 100; i++){
        numero += i;
        if(numero % 2 != 0 && numero < 1000){
            cont++;
            if(cont % 4 == 0){
                numeros += numero + ", <br>";
            } else {
                numeros += numero + ", ";
            }
        }
    }

    $panelEjercicio.innerHTML = 
            `<h3>Sumatorios</h3>
            <p>${numeros}</p>
            `;
}

function ejercicio8(){

    let numb = prompt("Introduce un número para calcular el factorial");
    let multiplicado = numb, texto = numb, multiplicacion;

    for (numb; numb > 1; numb--){
        multiplicacion = multiplicado * (numb-1);
        multiplicado = multiplicacion;
    }
    $panelEjercicio.innerHTML = 
            `<h3>Factorial</h3>
            <p>${"El factorial de " + texto + " es " + multiplicado}</p>
            `;
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



