//Elementos DOM
const cerrarSesionBtn = document.getElementById('btnCerrarSesion');
const GuardarCambios = document.getElementById('btnGuardar');
const $nombre = document.getElementById('nombre');
const $usuario = document.getElementById('usuario');
const $passwd = document.getElementById('passwd');

const usuariosArray2 = JSON.parse(localStorage.getItem("usuarios"));
const usuarios = Array();


for (let i = 0; i < usuariosArray2.length; i++){
    usuarios.push(usuariosArray2[i]);
}

const fotoDePerf = document.getElementById('fotoPerfil');
fotoDePerf.src = getUserPic();

document.title = "Perfil - " + getUserName();


// cerrarSesionBtn.onclick = () =>{
//     sessionStorage.removeItem('is_Signed');
//     sessionStorage.removeItem('signedUser');
//     location.reload();
// };

$nombre.value = getUserName();
$usuario.value = getUsername();
$passwd.value = getUserPasswd();

GuardarCambios.addEventListener('click', () =>{

    

    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].usuario == sessionStorage.getItem("signedUser")){
            usuarios[i].nombre = $nombre.value;
            usuarios[i].usuario = $usuario.value;
            usuarios[i].password = $passwd.value;
            
            sessionStorage.setItem("signedUser", usuarios[i].usuario);

            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
    }
    
})


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