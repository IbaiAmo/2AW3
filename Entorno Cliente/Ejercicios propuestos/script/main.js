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

    const html = `
        <h3>Objeto screen</h3>
        <p>La resolución de la pantalla es ${screen.width + "x" + screen.height}</p><br>
        <h3>Objeto navigator</h3>
        <p>El nombre del navegador que usas es: ${navigator.appName}</p>
        <p>Usas el siguiente sistema operativo: ${navigator.platform}</p>
        <p>La versión del navegador que usas es: ${navigator.appVersion}</p><br>
        <h3>Objeto document</h3>
        <p>La URL del documento es: <a href="${document.URL}">URL</a></p><br>
        <h3>Objeto location</h3>
        <p>El protocolo usado para acceder a esta página ha sido: ${location.protocol}</p><br>
        `;

        const boton = document.createElement('button');
        boton.classList.add('boton');
        boton.textContent = "Abrir ventana";
        boton.onclick = ()=>{
            window.open("https://www.google.com", "_blank", "toolbar=0,scrollbars=0,resizable=0,top=50,left=150,width=600,height=400");
        }

    $panelEjercicio.innerHTML = html;
    $panelEjercicio.appendChild(boton);
}

function ejercicio5(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej5 = clone.getElementById('ejercicio5');
    const input = clone.querySelector('#ejercicio5 > div > input');
    const boton = clone.querySelector('#ejercicio5 > div > button');
    let texto = clone.querySelector('#ejercicio5 > #aviso');
    let recordText = clone.querySelector('#ejercicio5 > #record');

    let startedWriting = false; //Para saber si ha empezado a escribir.
    let fechaInicio = new Date(); //esta fecha es para luego poder cambiarla y sin errores

    let cont = 0; //contador para que no se cambie la fecha cada vez que se escriba.
    
    input.addEventListener('input', () =>{
        cont++;
        startedWriting = true;
        if(cont == 1){
            fechaInicio = new Date();
        }
    });
        
    boton.onclick = () => {
        calcularTiempo();
    }

    //Aparte de mostrar el resultado con el boton, también con el enter.
    input.addEventListener('keydown', (e) =>{
        if(e.key == "Enter"){
            calcularTiempo();
        }
    });

    function calcularTiempo(){
        const fechaFin = new Date();//Fecha recogida al pulsar el boton.
        
        if(startedWriting){
            const fechaFin = new Date();
            const secs = (fechaFin - fechaInicio) /1000;
            texto.innerHTML = "Hola " + input.value + ", has tardado " + secs + " segundos."; //dividido entre 1000 para calcular los segundos. 
            input.value = "";
            startedWriting = false;
            cont = 0;
        }else{
            texto.innerHTML = "Empieza a escribir para calcular el tiempo";
        }
    }

    $panelEjercicio.appendChild(ej5);
    
}

function ejercicio6(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej6 = clone.getElementById('ejercicio6');
    const input = clone.querySelector('#ejercicio6 > div > input');
    const boton = clone.querySelector('#ejercicio6 > div > button');
    let texto = clone.querySelector('#ejercicio6 > p');

    const fechaActual = new Date();
    boton.onclick = () =>{
        let birth = new Date(input.value);
        let years = fechaActual.getFullYear() - birth.getFullYear();
        if ((fechaActual.getDate() < birth.getDate()) && (fechaActual.getMonth() <= birth.getMonth())){
            years--;
        }
        
        texto.innerHTML = "Has nacido el " + input.value + "<br>Tienes " + years + " años.";
    }
    

    $panelEjercicio.appendChild(ej6);
}

function ejercicio7(){
    $panelEjercicio.innerHTML = "";

}

function ejercicio8(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej8 = clone.getElementById('ejercicio8');
    const input = clone.querySelector('#ejercicio8 > div > input');
    const boton = clone.querySelector('#ejercicio8 > div > button');
    const aviso = clone.querySelector('#ejercicio8 > p');
    const tabla = clone.querySelector('#ejercicio8 > table');

    boton.onclick = () =>{
        if (input.value.trim() == ""){
            aviso.textContent = "Escribe algo para calcular la longitud.";
        }else{
            aviso.textContent = "";
            tabla.innerHTML = '<tr id="pos"><td>Posición</td>';
            let cadena = input.value;
            for(let i = 0; i < cadena.length; i++){
                tabla.innerHTML += `<td>${i}</td>`;
            }
            tabla.innerHTML += "</tr><tr><td>Contenido</td>"; 
            for(let i = 0; i < cadena.length; i++){
                tabla.innerHTML += `<td>${cadena.charAt(i)}</td>`;
            }
            tabla.innerHTML += "</td>";
        }
    }
    $panelEjercicio.appendChild(ej8);
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
