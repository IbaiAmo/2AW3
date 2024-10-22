const cerrarSesionBtn = document.getElementById('btnCerrarSesion');

const usuariosArray2 = JSON.parse(localStorage.getItem("usuarios"));

const fotoDePerf = document.getElementById('fotoPerfil');
fotoDePerf.src = getUserPic();

document.title = "Perfil - " + getUserName();


cerrarSesionBtn.onclick = () =>{
    sessionStorage.removeItem('is_Signed');
    sessionStorage.removeItem('signedUser');
    location.reload();
};

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