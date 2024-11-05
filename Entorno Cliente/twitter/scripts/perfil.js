//Elementos DOM
const cerrarSesionBtn = document.getElementById('btnCerrarSesion');
const GuardarCambios = document.getElementById('btnGuardar');
const $nombre = document.getElementById('nombre');
const $usuario = document.getElementById('usuario');
const $passwd = document.getElementById('passwd');
const $profilePic = document.getElementById('profilePic');
const $changePicBtn = document.getElementById('picChange');
const body = document.querySelector('body');

const $nombreMsg = document.getElementById('nombreMsg');
const $usuarioMsg = document.getElementById('usuarioMsg');
const $passwdMsg = document.getElementById('passwdMsg');

const usuariosArray2 = JSON.parse(localStorage.getItem("usuarios"));
const usuarios = Array();

const tweets = JSON.parse(localStorage.getItem("tweets"));


for (let i = 0; i < usuariosArray2.length; i++){
    usuarios.push(usuariosArray2[i]);
}

const fotoDePerf = document.getElementById('fotoPerfil');
fotoDePerf.src = getUserPic();
$profilePic.src = getUserPic();



document.title = "Perfil - " + getUserName();


cerrarSesionBtn.onclick = () =>{
    sessionStorage.removeItem('is_Signed');
    sessionStorage.removeItem('signedUser');
    location.reload();
};

$nombre.value = getUserName();
$usuario.value = getUsername();
$passwd.value = getUserPasswd();

let tweetsIdUser = Array();
let nombreBien = true, usuarioBien = true, passBien = true;

$nombre.addEventListener('blur', ()=>{
    if($nombre.value.trim() == ""){
        $nombre.classList.add('error');
        $nombre.value = $nombre.value.trim();
        $nombreMsg.innerHTML = '<i class="ri-error-warning-line"></i> No puedes dejar vacío este campo';
        nombreBien = false;
    }else if(/[^a-zA-Z\s]/.test($nombre.value)){
        $nombre.classList.add('error');
        $nombreMsg.innerHTML = '<i class="ri-error-warning-line"></i> Solo puedes usar letras';
        nombreBien = false;
    }else if ($nombre.value.length > 15){
        $nombre.classList.add('error');
        $nombreMsg.innerHTML = '<i class="ri-error-warning-line"></i> Ese nombre es demasiado largo';
        nombreBien = false;
    }else{
        $nombre.classList.remove('error');    
        $nombreMsg.innerHTML = '';
        nombreBien = true;
    }
});

$usuario.addEventListener('blur', ()=>{
    if ($usuario.value.trim() == ""){
        $usuario.classList.add('error');
        $usuario.value = $usuario.value.trim();
        $usuarioMsg.innerHTML = '<i class="ri-error-warning-line"></i> No puedes dejar vacío este campo';
        usuarioBien = false;
    }else if(/[@\s]/.test($usuario.value)){
        $usuario.classList.add('error');
        $usuarioMsg.innerHTML = '<i class="ri-error-warning-line"></i> No puede contener @ ni espacios';
        usuarioBien = false;
    }else if ($usuario.value.length > 13){
        $usuario.classList.add('error');
        $usuarioMsg.innerHTML = '<i class="ri-error-warning-line"></i> El usuario es demasiado largo';
        usuarioBien = false;

    }else if (comprobarUser($usuario.value)){
        $usuario.classList.add('error');
        $usuarioMsg.innerHTML = '<i class="ri-error-warning-line"></i> El usuario ya existe';
        usuarioBien = false;
    }else{
        $usuario.classList.remove('error');
        $usuarioMsg.innerHTML = '';
        usuarioBien = true;
    }
});

$passwd.addEventListener('blur', ()=>{
    if ($passwd.value.trim() == ""){
        $passwd.classList.add('error');
        $passwd.value = $passwd.value.trim();
        $passwdMsg.innerHTML = '<i class="ri-error-warning-line"></i> No puedes dejar vacío este campo';
        passBien = false;
    }else if(/[\s]/.test($passwd.value)){
        $passwd.classList.add('error');
        $passwdMsg.innerHTML = '<i class="ri-error-warning-line"></i> No pueden haber espacios';
        passBien = false;
    }else{
        $passwd.classList.remove('error');
        $passwdMsg.innerHTML = '';
        passBien = true;
    }
});

GuardarCambios.addEventListener('click', () =>{

    if (nombreBien && usuarioBien && passBien){
        //cambiar datos en el array de usuarios
        for (let i = 0; i < usuarios.length; i++){
            if (usuarios[i].usuario == sessionStorage.getItem("signedUser")){
                usuarios[i].nombre = $nombre.value;
                usuarios[i].usuario = $usuario.value;
                usuarios[i].password = $passwd.value;

                tweetsIdUser = usuarios[i].tweets;
                
                sessionStorage.setItem("signedUser", usuarios[i].usuario);
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                break;
            }
        }

        modal('<i class="ri-check-line"></i> Se han cambiado los datos personales');

        //cambiar datos en los tweets del usuario
        for (let x = 0; x < tweets.length; x++){
            for (let k = 0; k < tweetsIdUser.length; k++){
                if (tweets[x].ID == tweetsIdUser[k]){
                    tweets[x].NOMBRE = $nombre.value;
                    tweets[x].NOMBREUSUARIO = $usuario.value;
                }
            }
        }

        localStorage.setItem("tweets", JSON.stringify(tweets));
    }
    
});


$changePicBtn.addEventListener('change', () =>{

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
    var srcData = fileLoadedEvent.target.result; // <--- data: base64
    $profilePic.src = srcData;
    fotoDePerf.src = srcData;

    //cambiar datos en el array de usuarios
    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].usuario == sessionStorage.getItem("signedUser")){
            usuarios[i].fotoPerfil = $profilePic.src;

            tweetsIdUser = usuarios[i].tweets;
            
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            break;
        }
    }

    //cambiar datos en los tweets del usuario
    for (let x = 0; x < tweets.length; x++){
        for (let k = 0; k < tweetsIdUser.length; k++){
            if (tweets[x].ID == tweetsIdUser[k]){
                tweets[x].IMG = $profilePic.src;                
            }
        }
    }

    localStorage.setItem("tweets", JSON.stringify(tweets));
    }

    fileReader.readAsDataURL($changePicBtn.files[0]);  

    modal('<i class="ri-check-line"></i> Se ha cambiado la foto de perfil');
});


function getUserPic(){
    for (let x = 0; x < usuariosArray2.length; x++) {
        if (usuariosArray2[x].usuario == sessionStorage.getItem("signedUser")){
            return usuariosArray2[x].fotoPerfil;
        } 
    }
}

function getUserName(){
    for (let x = 0; x < usuariosArray2.length; x++) {
        if (usuariosArray2[x].usuario == sessionStorage.getItem("signedUser")){
            return usuariosArray2[x].nombre;
        } 
    }
}

function getUsername(){
    for (let x = 0; x < usuariosArray2.length; x++) {
        if (usuariosArray2[x].usuario == sessionStorage.getItem("signedUser")){
            return usuariosArray2[x].usuario;
        } 
    }
}

function getUserPasswd(){
    for (let x = 0; x < usuariosArray2.length; x++) {
        if (usuariosArray2[x].usuario == sessionStorage.getItem("signedUser")){
            return usuariosArray2[x].password;
        } 
    }
}

function modal(texto){
    const modal = document.createElement('div');
    const mensaje = document.createElement('p');

    modal.classList.add('modal');
    mensaje.innerHTML = texto;

    modal.appendChild(mensaje);
    body.appendChild(modal);

    setTimeout(() =>{
        body.removeChild(modal);
    }, 4500);
}

function comprobarUser(usuario){
    let existe = false;
    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].usuario == usuario && sessionStorage.getItem('signedUser') == usuario){
            existe = false;
            break;
        }else if (usuarios[i].usuario == usuario){
            existe = true;
            break;
        }
    }
    return existe;
}