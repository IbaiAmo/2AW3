//Elementos DOM
const cerrarSesionBtn = document.getElementById('btnCerrarSesion');
const GuardarCambios = document.getElementById('btnGuardar');
const $nombre = document.getElementById('nombre');
const $usuario = document.getElementById('usuario');
const $passwd = document.getElementById('passwd');
const $profilePic = document.getElementById('profilePic');
const $changePicBtn = document.getElementById('picChange');
const body = document.querySelector('body');

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

GuardarCambios.addEventListener('click', () =>{

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
    modal('<i class="ri-check-line"></i> Se han cambiado los datos personales');
    
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