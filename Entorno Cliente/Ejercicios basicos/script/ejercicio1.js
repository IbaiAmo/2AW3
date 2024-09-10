const panelEjercicio = document.getElementById('mostrarEjercicio');
const botones = document.querySelectorAll('.ej');



function ejercicio1(){
    
}


//evento de click para cada boton y mostrar por pantalla
botones.forEach(boton =>{
    boton.addEventListener('click', (event) =>{
        panelEjercicio.innerHTML = "";

        switch(event.target.id){
            case "e1":
                ejercicio1();
            break;
            case "e2":
                ejercicio2();
            break;
            case "e3":
                ejercicio3();
            break;
            case "e4":
                ejercicio4();
            break;
            case "e5":
                ejercicio5();
            break;
            case "e6":
                ejercicio6();
            break;
            case "e7":
                ejercicio7();
            break;
            case "e8":
                ejercicio8();
            break;
        }
    });
});

function ejercicio1(){
    let nombre = prompt("Introduce tu nombre");
    let ap1 = prompt("Introduce tu primer apellido");
    let ap2 = prompt("Introduce tu segundo apellido");

    panelEjercicio.innerHTML = 
    `<h3>¿Quién eres tú?</h3>
    <p>Nombre: ${nombre}</p>
    <p>Primer apellido: ${ap1}</p>
    <p>Segundo apellido: ${ap2}</p>
    <strong>${nombre + " " + ap1 + " " + ap2}</strong>`;
}

function ejercicio2(){

    let numeros = "";
    const filas = [5,10,15,20,25,30,35,40,45,50];
    let contarFilas = 0;

    for(let i = 1; i <= 100; i++){
        if (i % 2 == 0){
            numeros += i + ",";
            contarFilas++;
        }
        
        for(let x = 0; x < filas.length; x++){
            if (contarFilas == filas[i]){
                numeros += "<br>";
            }
        }
    }

    panelEjercicio.innerHTML = 
    `<h3>Números pares entre 1 y 100</h3>
    <p>${numeros}</p>`;
}

function ejercicio3(){

}

function ejercicio4(){

}

function ejercicio5(){

}

function ejercicio6(){

}

function ejercicio7(){

}

function ejercicio8(){

}
