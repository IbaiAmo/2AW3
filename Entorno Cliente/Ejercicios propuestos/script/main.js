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
    let texto = clone.querySelector('#ejercicio1 > #texto');
    let aviso = clone.querySelector('#ejercicio1 > #aviso');

    boton.addEventListener('click', ()=>{
        if(input.value.trim() != ""){
            texto.textContent = "Tiene " + input.value.length + " caracteres";
            aviso.textContent = "";
        }else{
            texto.textContent = "";
            aviso.textContent = "Escribe algo para calcular la longitud";
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
    let texto = clone.querySelector('#ejercicio5 > #texto');
    let aviso = clone.querySelector('#ejercicio5 > #aviso');

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
            aviso.textContent = "";
            const fechaFin = new Date();
            const secs = (fechaFin - fechaInicio) /1000;
            texto.textContent = "Hola " + input.value + ", has tardado " + secs + " segundos."; //dividido entre 1000 para calcular los segundos. 
            input.value = "";
            startedWriting = false;
            cont = 0;
        }else{
            texto.textContent = "";
            aviso.textContent = "Empieza a escribir para calcular el tiempo";
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
    let texto = clone.querySelector('#ejercicio6 > #texto');
    let aviso = clone.querySelector('#ejercicio6 > #aviso');

    const fechaActual = new Date();
    boton.onclick = () =>{
        let birth = new Date(input.value);
        let years = fechaActual.getFullYear() - birth.getFullYear();
        if ((fechaActual.getDate() < birth.getDate()) && (fechaActual.getMonth() <= birth.getMonth())){
            years--;
        }
        
        if(birth == "Invalid Date"){
            aviso.textContent = "Introduce una fecha para calcular tu edad";
            texto.innerHTML = "";
        }else{
            aviso.textContent = "";
            texto.innerHTML = "Has nacido el " + input.value + "<br>Tienes " + years + " años.";
        }
    }
    

    $panelEjercicio.appendChild(ej6);
}

function ejercicio7(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej7 = clone.getElementById('ejercicio7');
    const input = clone.querySelector('#ejercicio7 > div > input');
    const boton = clone.querySelector('#ejercicio7 > div > button');
    const aviso = clone.querySelector('#ejercicio7 > #aviso');
    const texto = clone.querySelector('#ejercicio7 > #calculo');


    boton.onclick = () =>{
        texto.textContent = "";
        if (input.value == ""){
            aviso.textContent = "Introduce un año para calcular el tiempo transcurrido";
        }else if(input.value > new Date().getFullYear() || input.value < 0){
            aviso.textContent = "Introduce un año válido";
        }else{
            aviso.textContent = "";
            let año = input.value;
            let fechaInicio = new Date(año, 0, 1); 
            let fechaActual = new Date();
            let diferencia = fechaActual - fechaInicio; 

            // Convertir la diferencia en días, horas, minutos y segundos

            let totalsegundos = Math.floor(diferencia / 1000); // Total de segundos

            let totalminutos = Math.floor(totalsegundos / 60); // Total de minutos

            let totalhoras = Math.floor(totalminutos / 60); // Total de horas

            let totaldias = Math.floor(totalhoras / 24); // Total de días

            let segundos = totalsegundos % 60;
            let minutos = totalminutos % 60;
            let horas = totalhoras % 24;

            // Mostrar el resultado
            texto.textContent = 
                "Han transcurrido " + totaldias + " días, " + horas + " horas, " 
                + minutos + " minutos y " + segundos + " segundos desde el 1 de enero de " + año + ".";

        }
    }
    
    $panelEjercicio.appendChild(ej7);

}

function ejercicio8(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej8 = clone.getElementById('ejercicio8');
    const input = clone.querySelector('#ejercicio8 > div > input');
    const boton = clone.querySelector('#ejercicio8 > div > button');
    const aviso = clone.querySelector('#ejercicio8 > p');
    const tabla = clone.querySelector('#ejercicio8 > table > tbody');

    boton.onclick = () =>{
        if (input.value.trim() == ""){
            input.value = "";
            aviso.textContent = "Escribe algo para calcular la longitud.";
        }else{
            aviso.textContent = "";
            tabla.innerHTML = "";
            let cadena = input.value;

            //primera fila de la tabla, posicion.
            const tr1 = document.createElement('tr');
            const posicion = document.createElement('td');
            posicion.textContent = "Posición";
            tr1.appendChild(posicion);
            for(let i = 0; i < cadena.length; i++){
                const pos = document.createElement('td');
                pos.textContent = i;
                tr1.appendChild(pos);
            }
            tabla.appendChild(tr1);

            //segunda fila de la tabla, contenido.
            const tr2 = document.createElement('tr');
            const contenido = document.createElement('td');
            contenido.textContent = "Contenido";
            tr2.appendChild(contenido);
            for(let i = 0; i < cadena.length; i++){
                const conten = document.createElement('td');
                conten.textContent = cadena.charAt(i);
                tr2.appendChild(conten);
            }
            tabla.appendChild(tr2);
        }
    }
    $panelEjercicio.appendChild(ej8);
}

function ejercicio9(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej9 = clone.getElementById('ejercicio9');
    const input = clone.querySelector('#ejercicio9 > div > input');
    const boton = clone.querySelector('#ejercicio9 > div > button');
    const aviso = clone.querySelector('#ejercicio9 > p');

    boton.onclick = () =>{
        if(input.value.trim() == ""){
            input.value = "";
            aviso.textContent = "Rellena el campo antes de entrar!";
        }else{
            aviso.textContent = "";
            let ventana = window.open("about:blank", "_blank", "width=300px,height=300px");
            const body = ventana.document.querySelector('body');
            const head = ventana.document.querySelector('head');

            body.id = "ventana";
            head.innerHTML = '<link rel="stylesheet" href="css/styles.css"><link rel="stylesheet" href="css/ejercicios.css">';
            const nombre = document.createElement('p');
            nombre.textContent = "Bienvenido " + input.value;
            body.appendChild(nombre);

            const boton = document.createElement('button');
            boton.classList.add('boton');
            boton.textContent = "Empezar a navegar";
            body.appendChild(boton);  
            input.value = "";  
            
            boton.onclick = () =>{
                ventana.close();
                window.open("https://www.google.com", "_self");
            }
        }
    }
    $panelEjercicio.appendChild(ej9);
}

function ejercicio10(){
    $panelEjercicio.innerHTML = "";
    const clone = $template.content.cloneNode(true);
    const ej10 = clone.getElementById('ejercicio10');
    const boton = clone.querySelector('#ejercicio10 > button');

    boton.style.marginTop= "20px";

    boton.onclick = () =>{
        for(let i = 0; i < 5; i++){
            let ventana = window.open("about:blank", "", "width=200,height=200");
            let head = ventana.document.querySelector('head');
            let body = ventana.document.querySelector('body');
            let btn = document.createElement('button');

            head.innerHTML = '<link rel="stylesheet" href="css/ejercicios.css"><link rel="stylesheet" href="css/styles.css">';
            body.id = "ventana";
            btn.classList.add('boton');
            btn.textContent = "Cerrar ventana";

            btn.onclick = () =>{
                ventana.close();
            }
            body.appendChild(btn);
        }
    }

    $panelEjercicio.appendChild(ej10);
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
