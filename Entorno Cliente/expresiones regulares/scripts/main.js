//Elementos del DOM
const form = document.querySelector('form');
const dni = document.getElementById('dni');
const nombre = document.getElementById('nombre');
const fecha = document.getElementById('fechaNac');
const hijos = document.getElementById('numHijos');
const email = document.getElementById('email');
const web = document.getElementById('web');
const passw = document.getElementById('passw');

const dnimsg = document.getElementById('dnimsg');
const nombremsg = document.getElementById('nombremsg');
const fechamsg = document.getElementById('fechamsg');
const hijosmsg = document.getElementById('hijosmsg');
const emailmsg = document.getElementById('emailmsg');
const webmsg = document.getElementById('webmsg');

let dniBien, nombreBien, fechaBien, hijosBien, emailBien, webBien;

dni.addEventListener('blur', () =>{
    dni.value = dni.value.toUpperCase();
    if (/^\d{8}[A-Z]{1}$/.test(dni.value)){
        dni.classList.remove('mal');
        dnimsg.innerHTML = "";
        dniBien = true;
    }else{
        dni.classList.add('mal');
        dnimsg.innerHTML = '<i class="ri-error-warning-line"></i> Debe tener 8 números y una letra';
        dniBien = false;
    }    
})

nombre.addEventListener('blur', () =>{
    if (/[^a-zA-Z\s]/.test(nombre.value)){
        nombre.classList.add('mal');
        nombremsg.innerHTML = '<i class="ri-error-warning-line"></i> Solo puedes introducir letras';
        nombreBien = false;
    }else{
        nombre.classList.remove('mal');
        nombremsg.innerHTML = "";
        nombreBien = true;
    }
})

email.addEventListener('blur', () =>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        email.classList.remove('mal');
        emailmsg.innerHTML = "";
        emailBien = true;
    }else{
        email.classList.add('mal');
        emailmsg.innerHTML = '<i class="ri-error-warning-line"></i> Introduce un email válido'
        emailBien = false;
    }
});

fecha.addEventListener('blur', () =>{
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(fecha.value)){
        fecha.classList.remove('mal');
        fechamsg.innerHTML = "";
        fechaBien = true;
    }else{
        fecha.classList.add('mal');
        fechamsg.innerHTML = '<i class="ri-error-warning-line"></i> La fecha está mal';
        fechaBien = false;
    }
})

hijos.addEventListener('blur', () =>{
    
    if (/[^0-9]/.test(hijos.value)){
        hijos.classList.add('mal');
        hijosmsg.innerHTML = '<i class="ri-error-warning-line"></i> Introduce un número entre 0-10';  
        hijosBien = false;
    }else if (hijos.value >= 0 && hijos.value <= 10){
        hijos.classList.remove('mal');
        hijosmsg.innerHTML = "";
        hijosBien = true;
    }else{
        hijos.classList.add('mal');
        hijosmsg.innerHTML = '<i class="ri-error-warning-line"></i> Introduce un número entre 0-10';  
        hijosBien = false;
    }
});

web.addEventListener('blur', () =>{
    if (/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g.test(web.value)){
        web.classList.remove('mal');
        webmsg.innerHTML = "";
        webBien = true;
    }else{
        web.classList.add('mal');
        webmsg.innerHTML = '<i class="ri-error-warning-line"></i> La URL está mal formada';
        webBien = false;
    }
});

const template = document.querySelector('template');
const body = document.querySelector('body');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(dniBien && nombreBien && fechaBien && hijosBien && emailBien && webBien){
        const clon = template.content.cloneNode(true);
        const modal = clon.querySelector('#modal');


        body.appendChild(modal);

        setTimeout(() =>{
            body.removeChild(modal);
        },4500);
    }
});