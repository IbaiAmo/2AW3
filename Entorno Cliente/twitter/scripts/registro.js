const is_Signed = sessionStorage.getItem('is_Signed');
if(is_Signed){
    location.href = 'inicio.html';
}

// localStorage.clear()
// sessionStorage.clear()

const usuarios = Array();
const userLocal = JSON.parse(localStorage.getItem("usuarios"));

if(userLocal){
    for (let i = 0; i < userLocal.length; i++){
        usuarios.push(userLocal[i]);
    }
}


const registro = document.querySelector('.registrarse');
const iniciarSesion = document.querySelector('.iniciarSesion');



//cambio de paneles
const cambiarSection1 = document.getElementById('cambiarIni');
const cambiarSection2 = document.getElementById('cambiarReg');


cambiarSection1.addEventListener('click', () =>{
    registro.classList.remove('activo');
    iniciarSesion.classList.add('activo');
});

cambiarSection2.addEventListener('click', () =>{
    registro.classList.add('activo');
    iniciarSesion.classList.remove('activo');
});

//registro
const $formRegistro = document.getElementById('formReg');
const nombreRegistro = document.getElementById('nombreR');
const usuarioRegistro = document.getElementById('usuarioR');
const passRegistro = document.getElementById('passwR');


$formRegistro.addEventListener('submit', (e) =>{

    e.preventDefault();

    let userExists = false;
    for(let i = 0; i < usuarios.length; i++){
        if (usuarioRegistro.value == usuarios[i].usuario){
            alert ("Ese usuario ya existe");
            userExists = true;
            break;
        }
    }

    

    if (!userExists){
        const user = {
            fotoPerfil: "./img/user.png",
            nombre: nombreRegistro.value,
            usuario: usuarioRegistro.value,
            password: passRegistro.value,
            tweets: Array() 
        }
    
        usuarios.push(user);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        sessionStorage.setItem("is_Signed", true);
        sessionStorage.setItem("signedUser", user.usuario);
        location.href = 'inicio.html';
    }


});